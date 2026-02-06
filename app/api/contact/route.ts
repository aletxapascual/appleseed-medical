import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Send notification email if Resend is configured
    if (resend) {
      try {
        await resend.emails.send({
          from: "Apple Seed Medical <noreply@appleseedmedical.com>",
          to: ["contact@appleseedmedical.com"],
          subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
            <p><strong>Practice:</strong> ${data.practiceName}</p>
            <p><strong>Practice Type:</strong> ${data.practiceType}</p>
            <h3>Message:</h3>
            <p>${data.message}</p>
          `,
        });

        // Send confirmation email to user
        await resend.emails.send({
          from: "Apple Seed Medical <noreply@appleseedmedical.com>",
          to: [data.email],
          subject: "Thank you for contacting Apple Seed Medical",
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Dear ${data.firstName},</p>
            <p>We've received your message and a member of our team will get back to you within 24-48 business hours.</p>
            <p>In the meantime, feel free to explore our product catalog or learn more about how we can help your practice.</p>
            <br>
            <p>Best regards,</p>
            <p>The Apple Seed Medical Team</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll be in touch soon!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
