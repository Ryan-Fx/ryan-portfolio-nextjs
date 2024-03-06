import Message from "@/components/message-table";
import LogoutButton from "@/components/logout-button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

async function getData() {
  const res = await prisma.minee.findMany();
  return res;
}

export default async function MineePage() {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "ADMIN") {
    redirect("/");
  }

  const msgs = await getData();

  return (
    <div className=" max-w-screen-lg mx-auto p-6">
      <p
        className={cn(
          "text-center font-semibold text-2xl mb-10",
          poppins.className
        )}
      >
        My Messages!
      </p>
      <div className="space-y-4">
        <div className="flex justify-between space-x-2">
          <Button asChild>
            <Link href={"/"}>Home</Link>
          </Button>
          <LogoutButton />
        </div>
        <div>
          <Message msgs={msgs} />
        </div>
      </div>
    </div>
  );
}
