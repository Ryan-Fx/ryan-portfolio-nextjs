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
import { ColorRing, Oval } from "react-loader-spinner";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
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
      email: "",
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
      toast.success("Your message was sent successfully!");
      return res.json();
    }

    toast.error("Something went wrong, please try again");
  };

  return (
    <section
      className="grid md:grid-cols-2 md:gap-2 mt-10 md:mt-28 scroll-mt-20 space-y-4 md:space-y-0"
      id="contact"
    >
      <div className="space-y-4">
        <h5 className="capitalize text-5xl font-bold">Let's get in touch</h5>
        <p className="text-lg">
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
      <div className="border-2 border-gray-300 p-6 rounded">
        <form
          action=""
          onSubmit={handleSubmit(sendEmail)}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="example@mail.com"
              className="w-full p-2 border-2 border-gray-300 rounded"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Let's talk about..."
              className="w-full p-2 border-2 border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-2 px-4 bg-black rounded-md text-white focus:outline-none hover:bg-slate-800"
          >
            {isSubmitting ? (
              <ColorRing
                visible={true}
                height="30"
                width="30"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
