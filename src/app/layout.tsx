import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Fx | Personal Portfolio",
  description: "Hi, I'm Ryan. I build things for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950dark:text-opacity-90 dark:bg-gray-900 dark:text-gray-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
          <div className="bg-[#dbd7fb] dark:bg-[#828093] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>

          <div className=" bg-[#fbe2e3] dark:bg-[#8a7c7c] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
