// Emails the CV upload to the team through Resend (https://resend.com), using its HTTP API so no
// extra package is needed.
//
// Until a domain is verified in Resend, only its shared sender (onboarding@resend.dev) can be used, and
// it can only deliver to the email address of the Resend account itself. So RESEND_TO_EMAIL must be that
// account's email. Once a domain is verified, set RESEND_FROM to an address on it and RESEND_TO_EMAIL to
// any inbox.
//
//   RESEND_API_KEY   secret API key from the Resend dashboard (required)
//   RESEND_TO_EMAIL  where CV emails are delivered (required)
//   RESEND_FROM      optional sender, default "Bell Recruitment <onboarding@resend.dev>"

const RESEND_URL = "https://api.resend.com/emails";
const DEFAULT_FROM = "Bell Recruitment <onboarding@resend.dev>";

export function emailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.RESEND_TO_EMAIL);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type CvEmail = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  file: File;
};

export async function sendCvEmail({ name, email, phone, linkedin, file }: CvEmail) {
  const rows: [string, string][] = [
    ["Name", name || "Not given"],
    ["Email", email],
    ["Phone", phone || "Not given"],
    ["LinkedIn", linkedin || "Not given"],
  ];

  const text = [`A new CV has been uploaded on the Bell Recruitment website.`, "", ...rows.map(([k, v]) => `${k}: ${v}`)].join("\n");
  const html =
    `<p>A new CV has been uploaded on the Bell Recruitment website.</p>` +
    `<table cellpadding="6" style="border-collapse:collapse">` +
    rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("") +
    `</table><p>The CV is attached.</p>`;

  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || DEFAULT_FROM,
      to: [process.env.RESEND_TO_EMAIL],
      reply_to: email,
      subject: `New CV upload: ${name || email}`,
      html,
      text,
      attachments: [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()).toString("base64") }],
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
}
