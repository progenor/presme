"use client";
import SlideShow from "@/components/SlideShow";
import SlideView from "@/components/SlideView";
import Image from "next/image";
import { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [openSlideShow, setOpenSlideSow] = useState(false);

  return (
    <main className="flex justify-center items-center h-screen p-2 lg:p-4 bg-background">
      <section className="border-white border-2 gap-2 lg:gap-3 rounded-lg w-full h-full p-2 flex">
        <SlideShow
          openSlideShow={openSlideShow}
          setOpenSlideSow={setOpenSlideSow}
        />
        <SlideView alt="asd" img="/images/img2.jpg" number={2} />
      </section>
    </main>
  );
};

export default Page;
