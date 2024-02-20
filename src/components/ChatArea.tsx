import React from "react";
import { cn } from "@/lib/utils";
type Props = {
  className?: string;
};

const ChatArea = ({ className }: Props) => {
  return (
    <div
      className={cn("w-1/3 h-full border-2 border-white rounded-lg", className)}
    >
      asd
    </div>
  );
};

export default ChatArea;
