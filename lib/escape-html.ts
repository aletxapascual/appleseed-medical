const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

export function escapeHtml(input: string | null | undefined): string {
  if (input == null) return ""
  return String(input).replace(/[&<>"']/g, (ch) => ESCAPE_MAP[ch])
}
