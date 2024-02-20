import { ScrollArea } from "@/components/ui/scroll-area";
import SlideCard from "@/components/SlideCard";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const SlideShow = ({ className }: Props) => {
  return (
    <ScrollArea className={cn(`h-full w-full pr-5`, className)}>
      <h1 className=" mb-2">Slides:</h1>
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
