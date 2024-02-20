import { ScrollArea } from "@/components/ui/scroll-area";
import SlideCard from "@/components/SlideCard";
import { useState } from "react";

type Props = {
  openSlideShow: boolean;
  setOpenSlideSow: (value: boolean) => void;
};

const SlideShow = ({ openSlideShow, setOpenSlideSow }: Props) => {
  return (
    <ScrollArea className={`h-full w-1/3 pr-3 ${!openSlideShow && "hidden"}`}>
      <SlideCard img="/images/img1.jpg" alt="amazing" number="4" />
      <SlideCard img="/images/img1.jpg" alt="amazing" number="4" />
      <SlideCard img="/images/img3.jpg" alt="amazing" number="6" />
      <SlideCard img="/images/img2.jpg" alt="amazing" number="5" />
      <SlideCard img="/images/img2.jpg" alt="amazing" number="5" />
      <SlideCard img="/images/img3.jpg" alt="amazing" number="6" />
      <SlideCard img="/images/img1.jpg" alt="amazing" number="4" />
      <SlideCard img="/images/img2.jpg" alt="amazing" number="5" />
      <SlideCard img="/images/img3.jpg" alt="amazing" number="6" />
    </ScrollArea>
  );
};

export default SlideShow;
