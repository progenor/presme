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
  const [showChat, setShowChat] = useState(false);
  const [showSlides, setShowSlides] = useState(false);

  return (
    <main className="flex justify-center items-center min-h-screen h-screen p-2 lg:p-4 bg-background">
      <div className="w-full h-full border-white border-2 rounded-lg">
        <div className="flex justify-between p-2">
          <Sheet>
            <SheetTrigger key={"left"} className="lg:hidden">
              <Button>Slides</Button>
            </SheetTrigger>

            <SheetContent side={"left"} className="lg:hidden">
              <SlideShow />
            </SheetContent>
            <Button
              className="hidden lg:block"
              onClick={() => setShowSlides(!showSlides)}
            >
              Slides
            </Button>
          </Sheet>
          <Sheet>
            <SheetTrigger key={"right"}>
              <Button className="lg:hidden">Chat</Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
              <ChatArea />
            </SheetContent>
            <Button
              className="hidden lg:block"
              onClick={() => setShowChat(!showChat)}
            >
              Chat
            </Button>
          </Sheet>
        </div>
        <section className=" gap-2 lg:gap-3 w-full h-[92%] p-2 flex">
          <SlideShow
            className={`hidden ${!showSlides && "lg:block"} lg:w-1/3`}
          />
          <SlideView alt="asd" img="/images/img2.jpg" number={2} />
          <ChatArea
            className={`hidden lg:w-1/3 lg:border-2 rounded-lg border-white ${
              !showChat && "lg:block"
            } `}
          />
        </section>
      </div>
    </main>
  );
};

export default Page;
