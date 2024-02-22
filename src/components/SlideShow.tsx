"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import SlideCard from "@/components/SlideCard";
import { cn } from "@/lib/utils";

import { Document, Outline, Page, pdfjs } from "react-pdf";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
  className?: string;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  pdf: string;
};

const SlideShow = ({
  className,
  currentSlide = 0,
  setCurrentSlide,
  pdf,
}: Props) => {
  const [numPages, setNumPages] = React.useState(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function onItemClick(index: number) {
    setCurrentSlide(index);
  }

  return (
    <ScrollArea className={cn(`h-full w-full pr-5 `, className)}>
      <Document
        file={pdf}
        renderMode="canvas"
        className=" flex flex-col gap-4 h-full w-full relative"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div
            key={`page_${index + 1}`}
            className={cn(
              "flex justify-center h-80  rounded-lg m-0 p-0 border-2 border-white object-contain overflow-hidden relative",
              index === currentSlide ? "border-primary" : ""
            )}
            onClick={() => onItemClick(index)}
          >
            <Page
              pageNumber={index + 1}
              canvasBackground="transparent"
              height={350}
            />
            <div className="absolute right-1 bottom-1">{index}</div>
          </div>
        ))}
      </Document>
    </ScrollArea>
  );
};

export default SlideShow;
