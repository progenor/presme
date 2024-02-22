"use client";
import ChatArea from "@/components/ChatArea";
import SlideShow from "@/components/SlideShow";
import SlideView from "@/components/SlideView";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useOthers } from "../../liveblocks.config";

type Props = {};

const RoomPage = (props: Props) => {
  const [showChat, setShowChat] = useState(false);
  const [showSlides, setShowSlides] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);
  const pdf = "/pdfs/pdf1.pdf";

  return (
    <main className="flex justify-center items-center min-h-screen h-screen p-2 lg:p-4 bg-background overflow-hidden">
      <div className="w-full h-full border-white border-2 rounded-lg">
        <div className="flex justify-between p-2">
          <Sheet>
            <SheetTrigger key={"left"} className="lg:hidden">
              <Button>Slides</Button>
            </SheetTrigger>

            <SheetContent side={"left"} className="lg:hidden">
              <SlideShow
                pdf={pdf}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
              />
            </SheetContent>
            <Button
              className="hidden lg:block"
              onClick={() => setShowSlides(!showSlides)}
            >
              Slides
            </Button>
          </Sheet>
          <div className="">timer/clock</div>
          <div className="flex items-center gap-4">
            <div>
              <h1>Users: {useOthers().length}</h1>
            </div>
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
        </div>
        <section className=" gap-2 lg:gap-3 w-full h-[92%] p-2 lg:p-3 flex">
          <SlideShow
            pdf={pdf}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            className={`hidden ${!showSlides && "lg:block"} lg:w-1/3`}
          />
          <SlideView
            alt="asd"
            pdf={pdf}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
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

export default RoomPage;
