import LoginForm from "@/components/LoginForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <LoginForm />
    </div>
  );
}
