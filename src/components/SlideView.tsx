"use client";
import React from "react";
import Image from "next/image";
import { Document, Outline, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  alt: string;
  pdf: string;
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
};

const SlideView = ({ alt, pdf, currentSlide = 0, setCurrentSlide }: Props) => {
  const [numPages, setNumPages] = React.useState(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages - 1);
  }

  function nextPage() {
    if (currentSlide < numPages) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }

  function prevPage() {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(numPages);
    }
  }

  return (
    <div className="w-full h-full flex justify-center border-2 border-white p-0 rounded-lg overflow-hidden relative">
      <Document
        file={pdf}
        renderMode="canvas"
        className="p-0 m-0"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageIndex={currentSlide}
          className="bg-red-500 w-full h-[99vh] rounded-lg m-0 p-0"
          canvasBackground="transparent"
          height={900}
        />
      </Document>
      <Button
        className="absolute w-1/2 h-[95vh] flex justify-end bg-transparent top-0 right-0  hover:bg-transparent"
        onClick={() => nextPage()}
      >
        <div className="p-3 rounded-lg bg-primary">
          <ArrowRight />
        </div>
      </Button>
      <Button
        className="absolute w-1/2 h-[95vh] flex justify-start bg-transparent top-0 left-0 hover:bg-transparent"
        onClick={() => prevPage()}
      >
        <div className="bg-primary p-2 rounded-lg">
          <ArrowLeft />
        </div>
      </Button>
      <h1 className="p-2 bg-primary absolute bottom-2 right-2 rounded-lg ">
        {currentSlide} / {numPages}
      </h1>
    </div>
  );
};

export default SlideView;
