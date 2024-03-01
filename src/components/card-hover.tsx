import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          className="text-xl text-blue-400 underline font-bold italic"
          variant="link"
        >
          social media.
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4 text-lg font-semibold">
          <div className="">
            <h4 className="font-semibold text-purple-500 hover:text-teal-500">
              rinnd.dn@gmail.com
            </h4>
            <div className="flex items-center pt-2">
              <FaInstagram className="mr-2 h-4 w-4 opacity-70 text-teal-500 hover:text-purple-500" />{" "}
              <Link
                href={"https://instagram.com/fx.ryan"}
                className="text-muted-foreground text-teal-500 hover:text-purple-400"
              >
                fx.ryan
              </Link>
            </div>
            <div className="flex items-center pt-2">
              <FaWhatsapp className="mr-2 h-4 w-4 opacity-70 text-teal-500  hover:text-purple-500" />{" "}
              <span className="text-muted-foreground text-teal-500">
                +628 525 631 1650
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
