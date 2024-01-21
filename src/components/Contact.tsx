"use client";

import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedIn from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const FormSchema = z.object({
  name: z.string().min(1, "Name is required").max(15, "Name is too long"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(40, "Subject is too long"),
  message: z.string().min(1, "Message is required"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const sendEmail = async (data: z.infer<typeof FormSchema>) => {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      toast.success(`Hey ${data.name},  your message was sent successfully`);
      return res.json();
    }

    toast.error("Something went wrong, please try again");
  };

  return (
    <section className="grid md:grid-cols-2 md:gap-2" id="contact">
      <div>
        <h5>Let's get in touch</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          reiciendis consectetur pariatur fuga voluptate, provident omnis rem
          numquam a laudantium.
        </p>
        <div className="flex gap-2">
          <Link href={"github.com"}>
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="bg-black rounded-full"
            />
          </Link>
          <Link href={"linkedin.com"}>
            <Image
              src={LinkedIn}
              alt="LinkedIn Icon"
              className="bg-black rounded-full"
            />
          </Link>
        </div>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit(sendEmail)}>
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              id="name"
              {...register("name")}
              placeholder="example@mail.com"
              className="w-full capitalize"
            />
          </div>
          <div>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="example@mail.com"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              placeholder="Just say hi"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Let's talk about..."
              className="w-full"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
