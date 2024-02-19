import Image from "next/image";

type Props = {
  alt: string;
  img: string;
  number: number;
};

const SlideView = ({ alt, img, number }: Props) => {
  return (
    <div className="w-full rounded-lg border-2 border-white  h-full relative">
      <Image
        fill
        alt={alt}
        src={img}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default SlideView;
