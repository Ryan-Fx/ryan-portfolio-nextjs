import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import Provider from "@/components/Provider";
import Navbar from "@/components/Navbar";

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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster
              position="bottom-right"
              toastOptions={{ duration: 3000 }}
            />

            <main className="flex flex-col min-h-screen">
              <Navbar />
              {/* <div className="bg-[#dbd7fb] dark:bg-[#8c89a0] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
              <div className=" bg-[#fbe2e3] dark:bg-[#a99899] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div> */}
              <section>{children}</section>
            </main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
