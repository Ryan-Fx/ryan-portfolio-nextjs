import { cn } from "@/lib/utils";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface MsgsProps {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export default function Message({ msgs }: { msgs: MsgsProps[] }) {
  return (
    <div>
      <table className={cn("w-full text-left", karla.className)}>
        <thead className="bg-teal-100 dark:bg-secondary">
          <tr>
            <th className="py-4 px-4">#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody className="bg-teal-50 text-muted-foreground dark:bg-primary-foreground">
          {msgs.map((msg: MsgsProps, index: number) => (
            <tr key={msg.id} className="border-b">
              <td className="py-3 px-4">{index + 1}</td>
              <td className="capitalize">{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>{msg.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
