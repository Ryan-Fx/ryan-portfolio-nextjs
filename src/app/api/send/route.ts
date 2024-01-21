import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { z } from "zod";
import { NextResponse } from "next/server";

const SendSchema = z.object({
  name: z.string().min(1, "Name is required").max(15, "Name is too long"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(40, "Subject is too long"),
  message: z.string().min(1, "Message is required"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = SendSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "Ryan <onboarding@resend.dev>",
      to: "rinnd.dn@gmail.com",
      subject: "Message from contact form (Ryan Portfolio)",
      text: message,
      react: EmailTemplate({
        firstName: name,
        text: message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
