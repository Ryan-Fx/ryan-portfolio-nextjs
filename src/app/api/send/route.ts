import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { z } from "zod";
import { NextResponse } from "next/server";

const SendSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message } = SendSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "rinnd.dn@gmail.com",
      subject: "Message from contact form (Ryan Portfolio)",
      reply_to: email,
      react: EmailTemplate({
        message: message,
        email: email,
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
