import Image from "next/image";

export type SlideCardProps = {
  img: string;
  alt: string;
  number: string;
};

const SlideCard = ({ img, alt, number }: SlideCardProps) => {
  return (
    <div className="border-white border-2 rounded-lg h-44 lg:h-80 relative mb-4">
      <Image
        alt={alt}
        fill
        className="w-full h-full object-contain"
        src={img}
      />
      <p className="absolute bottom-1 right-4 text-white">{number}</p>
    </div>
  );
};

export default SlideCard;
