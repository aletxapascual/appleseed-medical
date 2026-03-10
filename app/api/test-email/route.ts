import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/resend'

export async function GET() {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'RESEND_API_KEY is not configured' },
      { status: 500 }
    )
  }

  const to = process.env.CONTACT_EMAIL || 'delivered@resend.dev'

  try {
    const data = await sendEmail({
      to,
      subject: 'Test Email from Appleseed Medical',
      html: '<h1>Test Email</h1><p>This is a test email sent via Resend.</p>',
      text: 'Test Email - This is a test email sent via Resend.',
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    )
  }
}
