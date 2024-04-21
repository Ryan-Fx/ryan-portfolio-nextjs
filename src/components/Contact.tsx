"use client";

import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";
import { Karla, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

export default function Contact() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const res = await fetch("/api/minee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Your message was sent successfully!");
      form.reset();
      router.refresh();
      return res.json();
    }

    toast.error("Something went wrong, please try again!");
  };

  return (
    <section
      className="mt-10 md:mt-28 scroll-mt-12  md:space-y-0 bg-teal-50 dark:bg-primary-foreground px-8 lg:px-14 xl:px-[220px] py-[120px]"
      id="contact"
    >
      <motion.div className="grid lg:grid-cols-7 md:gap-2 xl:gap-6 space-y-4 lg:space-y-0">
        <div className="space-y-4 col-span-3">
          <h5
            className={cn(
              "capitalize text-2xl md:text-4xl font-bold text-blue-500 dark:text-primary",
              karla.className
            )}
          >
            Let's get in touch! 📩
          </h5>
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground tracking-wide",
              karla.className
            )}
          >
            I'm always looking for opportunities to expand upon my skills and am
            currently seeking a full-time junior web developer position. I'd
            also love to hear from you if you have any questions, are looking to
            network, or would like to chat about any projects I can help with.
          </p>
          <div className="flex space-x-2 md:space-x-5 justify-end md:justify-start">
            <Link href="https://www.linkedin.com/in/ryan-fx-5921872b8">
              <FaLinkedin className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
            </Link>
            <Link href="https://github.com/Ryan-Fx" target="_blank">
              <FaGithub
                target="_blank"
                className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500"
              />
            </Link>
            <Link href={"https://instagram.com/fx.ryan"} target="_blank">
              <FaInstagram className="h-8 w-8 hover:scale-110 transition-all hover:text-purple-500" />
            </Link>
          </div>
        </div>

        <div className={cn("col-span-4", poppins.className)}>
          {" "}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 lg:text-2xl"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="ring-2 ring-cyan-500"
                        placeholder="Ryan"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="ring-2 ring-cyan-500"
                        placeholder="example@mail.com"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={10}
                        className="ring-2 ring-cyan-500 resize-none"
                        placeholder="Let's talk about..."
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={form.formState.isSubmitting} type="submit">
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
      <blockquote className="pt-24 flex flex-col items-center gap-2 justify-center text-center text-teal-400 italic font-medium tracking-widest">
        <svg
          className="w-8 h-8 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <p className="md:text-3xl">"Jellyfish can't swim in the night"</p>
      </blockquote>
    </section>
  );
}
