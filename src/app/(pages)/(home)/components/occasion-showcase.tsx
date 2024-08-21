import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";

type SpecialOccasion = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

type Props = {
  occasions: SpecialOccasion[];
};

export function OccasionShowcase({ occasions }: Props) {
  const [selectedOccasion, setSelectedOccasion] = useState(occasions[0].name);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { name, description, image } = occasions[currentIndex];

  const handleSelect = (name: string) => {
    const index = occasions.findIndex((occasion) => occasion.name === name);
    setSelectedOccasion(name);
    setCurrentIndex(index);
  };

  const renderButtons = () =>
    occasions.map((occasion) => (
      <div
        key={occasion.name}
        className="relative flex flex-col items-center mx-auto w-fit xl:mr-auto xl:ml-0"
      >
        <button
          onClick={() => handleSelect(occasion.name)}
          className={`text-xl font-medium text-darkCian uppercase tracking-widest transition-all hover:opacity-100 
           ${selectedOccasion !== occasion.name && "opacity-50"}`}
        >
          {occasion.name}
        </button>

        {selectedOccasion === occasion.name && (
          <span className="bg-lightBrown w-1/2 h-0.5" />
        )}
      </div>
    ));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % occasions.length;
        setSelectedOccasion(occasions[newIndex].name);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [occasions]);

  return (
    <div className="flex flex-col items-center gap-5 xl:flex-row xl:gap-20 xl:justify-between">
      <Image
        src={image.src}
        alt={image.alt}
        height={0}
        width={0}
        sizes="100vw"
        className="z-10 mb-5 w-full h-full max-w-[327px] md:max-w-[540px]"
      />

      <div className="flex flex-col gap-10 xl:flex-col-reverse">
        <div className="flex flex-col gap-5 xl:items-start">
          {renderButtons()}
        </div>

        <div className="flex flex-col items-center text-center xl:text-start xl:items-start">
          <span className="text-4xl text-almostBlack font-bold md:text-5xl xl:text-6xl">
            {name}
          </span>

          <p className="text-almostBlack text-lg mb-5 max-w-sm xl:text-xl">
            {description}
          </p>

          <div className="w-full">
            <Link href="/booking">
              <Button title="book a table" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
