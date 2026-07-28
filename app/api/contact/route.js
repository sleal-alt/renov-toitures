import { NextResponse } from "next/server";

export async function POST(req) {
  const { nom, email, telephone, message } = await req.json();

  // Simple email via Resend (or just log for now)
  console.log("Contact:", { nom, email, telephone, message });

  // TODO: wire up email sending (Resend / Nodemailer)
  return NextResponse.json({ ok: true });
}
