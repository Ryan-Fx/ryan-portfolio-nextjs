import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const mineSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

// CREATE MESSAGE (POST)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = mineSchema.parse(body);

    const newMsg = await prisma.minee.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json({ newMsg, message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "wrong" }, { status: 500 });
  }
}

// READ MESSAGE (GET)
export const GET = async () => {
  try {
    const msgs = await prisma.minee.findMany();
    return NextResponse.json({ msgs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "wrong" }, { status: 500 });
  }
};
