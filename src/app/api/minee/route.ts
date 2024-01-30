import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const mineSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, message } = mineSchema.parse(body);

    const newMsg = await prisma.minee.create({
      data: {
        email,
        message,
      },
    });

    return NextResponse.json({ newMsg, message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "wrong" }, { status: 500 });
  }
}
