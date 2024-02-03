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
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

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

  const sendMessage = async (data: z.infer<typeof FormSchema>) => {
    const router = useRouter();

    const res = await fetch("/api/minee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Your message was sent successfully!");
      reset();
      router.refresh();
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
        <h5 className="capitalize text-5xl font-bold dark:text-white">
          Let's get in touch
        </h5>
        <p className="text-lg dark:text-slate-200">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          reiciendis consectetur pariatur fuga voluptate, provident omnis rem
          numquam a laudantium.
        </p>
        <div className="flex space-x-2 md:space-x-5 justify-end md:justify-start">
          <Link href="">
            <FaLinkedin className="md:h-12 md:w-12 h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
          </Link>
          <Link href="https://github.com/Ryan-Fx" target="_blank">
            <FaGithub
              target="_blank"
              className="md:h-12 md:w-12 h-8 w-8 hover:scale-110 transition-all hover:text-purple-500"
            />
          </Link>
          <Link href={"https://instagram.com/fx.ryan"} target="_blank">
            <FaInstagram className="md:h-12 md:w-12 h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
          </Link>
        </div>
      </div>
      <div className="border border-gray-300 p-6 rounded text-xs sm:text-base">
        <form
          action=""
          onSubmit={handleSubmit(sendMessage)}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="font-semibold">
              Your email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="example@mail.com"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Let's talk about... or just say hi"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <p className="text-red-500 text-xs">{errors.message?.message}</p>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-2 px-4 bg-black dark:bg-white rounded-md text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200"
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
