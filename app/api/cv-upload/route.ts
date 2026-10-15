import { NextResponse } from "next/server";
import { emailConfigured, sendCvEmail } from "@/lib/email";
import {
  ALLOWED_CV_EXTENSIONS,
  EMAIL_RE,
  MAX_CV_BYTES,
  field,
  logSubmission,
  saveCv,
} from "@/lib/submissions";

function fail(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  const form = await request.formData();
  const name = field(form, "name");
  const email = field(form, "email");
  const phone = field(form, "phone");
  const linkedin = field(form, "linkedin");
  const file = form.get("cv");

  if (!email || !EMAIL_RE.test(email)) return fail("Please enter a valid email address.");
  if (!(file instanceof File) || !file.name) return fail("Please attach your CV before submitting.");

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_CV_EXTENSIONS.includes(ext)) return fail("Please upload a PDF, DOC, or DOCX file.");
  if (file.size > MAX_CV_BYTES) return fail("Your CV must be 5MB or smaller.");

  // When email is set up it is the main record, so a copy on disk is a best-effort extra (hosts
  // without a writable disk, such as Vercel, can't keep one). Without email, the disk copy is required.
  const emailOn = emailConfigured();
  try {
    const storedFile = await saveCv(file);
    await logSubmission("cv", { name, email, phone, linkedin, stored_file: storedFile });
  } catch (err) {
    if (!emailOn) throw err;
    console.warn("Could not keep a copy of the CV on disk:", err);
  }

  if (emailOn) {
    try {
      await sendCvEmail({ name, email, phone, linkedin, file });
    } catch (err) {
      console.error("Could not email the CV:", err);
      return fail("We couldn't send your CV just now. Please try again in a few minutes.", 502);
    }
  }

  return NextResponse.json({ ok: true, name: name || "there" });
}
