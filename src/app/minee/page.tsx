import Message from "@/components/message-table";
import LogoutButton from "@/components/logout-button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

async function getData() {
  const res = await prisma.minee.findMany();
  return res;
}

export default async function MineePage() {
  // const { status } = useSession();
  // if (status === "unauthenticated") {
  //   redirect("/login");
  // }

  const msgs = await getData();
  console.log(msgs);

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <div className="p-4 space-y-4">
      <p>Minee Page</p>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Message msgs={msgs} />
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
