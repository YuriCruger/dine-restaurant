import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export function DishCard({ src, alt, title, description }: Props) {
  return (
    <div className="flex flex-col items-center text-center border-b-[1px] border-lightGray border-opacity-50 p-sm md:flex-row md:gap-5 md:text-start md:pl-0">
      <Image
        src={src}
        alt={alt}
        height={0}
        width={0}
        sizes="100vw"
        className="h-full w-full max-w-[327px] max-h-[245px] mb-5 md:max-w-[128px] md:max-h-[96px] md:mb-0"
      />
      <div>
        <span className="font-bold text-white text-xl mb-2">{title}</span>
        <p className="text-white max-w-sm md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}
