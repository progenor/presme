import React from "react";
import { cn } from "@/lib/utils";
type Props = {
  className?: string;
};

const ChatArea = ({ className }: Props) => {
  return <div className={cn("w-full h-full", className)}></div>;
};

export default ChatArea;
