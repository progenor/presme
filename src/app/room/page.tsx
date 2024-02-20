"use client";
import ChatArea from "@/components/ChatArea";
import SlideShow from "@/components/SlideShow";
import SlideView from "@/components/SlideView";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {};

const Page = (props: Props) => {
  const [openSlideShow, setOpenSlideSow] = useState(false);
  const [openChatArea, setChatArea] = useState(false);

  return (
    <main className="flex justify-center items-center min-h-screen h-screen p-2 lg:p-4 bg-background">
      <div className="w-full h-full border-white border-2 rounded-lg">
        <div className="flex justify-between p-2">
          <Button onClick={() => setOpenSlideSow(!openSlideShow)}>
            Slides
          </Button>
          <Button onClick={() => setChatArea(!openChatArea)}>Chat</Button>
        </div>
        <section className=" gap-2 lg:gap-3 w-full h-[92%] p-2 flex">
          <SlideShow
            openSlideShow={openSlideShow}
            setOpenSlideSow={setOpenSlideSow}
          />
          <SlideView alt="asd" img="/images/img2.jpg" number={2} />
          <ChatArea className={`${!openChatArea && "hidden"}`} />
        </section>
      </div>
    </main>
  );
};

export default Page;
