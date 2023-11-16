import { CalendarIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Youtube } from "lucide-react";

interface SocialHoverCardProps {
  text: string;
}

export function SocialHoverCard({ text }: SocialHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="pr-0 pl-1">{ text }</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/evangelist-dag.jpg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Dag Heward-Mills</h4>
            <p className="text-sm">
              Exclusive videos of the world-renown Evangelist, prolific
              Christian Author and super-mega church pastor, Bishop Dag
              Heward-Mills...
            </p>
            <div className="flex items-center pt-2">
              <Youtube className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
              163K subscribers
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
