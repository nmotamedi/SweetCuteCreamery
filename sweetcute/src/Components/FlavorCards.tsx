import { useEffect, useState } from "react";
import { Flavors } from "../data";

export function FlavorCards({
  flavor,
  isDescOpen,
  handleChange,
}: {
  flavor: Flavors;
  isDescOpen: boolean;
  handleChange: (flavor: string | undefined) => void;
}) {
  const [isFlipped, setisFlipped] = useState(false);
  useEffect(() => {
    setisFlipped(isDescOpen);
  }, [isDescOpen]);
  return (
    <div className="basis-[32%] h-72 my-2 md:my-4 rounded-2xl hover:cursor-pointer perspective-1000">
      <div
        className={`relative w-full h-full transition-transform rounded-2xl duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full rounded-2xl h-full backface-hidden flex items-center justify-center bg-brand-cream">
          <div
            className=" h-full w-full rounded-2xl flex flex-col justify-center items-center"
            onClick={() => handleChange(flavor.title)}
          >
            <div className="basis-[15%] w-full h-8 flex justify-evenly items-center">
              {flavor.isGF && <GFBullet />}
              {flavor.isVegan && <VeganBullet />}
              {flavor.isDairyFree && <DFBullet />}
            </div>
            <div className="basis-[60%] lg:h-36 h-24 flex justify-center items-center relative">
              {flavor.img && (
                <div className="h-24 w-24 lg:h-36 lg:w-36 founded-full">
                  <img
                    className="w-full"
                    src={flavor.img}
                    alt={flavor.title}
                    width={320}
                    height={320}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
            <div className="basis-[25%] relative flex items-center justify-center">
              <h2 className="text-brand-red font-FaroVariable text-base md:text-3xl px-2 md:px-6 overflow-visible leading-none relative -top-2">
                {flavor.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute w-full rounded-2xl h-full backface-hidden flex items-center justify-center bg-brand-pink rotate-y-180">
          <div
            className=" flex w-full h-full flex-col justify-center items-center"
            onClick={() => {
              handleChange(undefined);
              setisFlipped(false);
            }}
          >
            <div className="basis-1/3">
              <h2 className="text-brand-red font-FaroVariable text-base md:text-xl xl:text-3xl p-2 pt-3 lg:p-6">
                {flavor.title}
              </h2>
            </div>
            <div className="basis-2/3 ">
              <h2 className="text-brand-red font-PoppinsLight text-xs md:text-lg xl:text-xl p-2 pt-3 lg:p-6">
                {flavor.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GFBullet() {
  return (
    <div className="w-8 h-8 flex justify-center items-center bg-brand-red rounded-full">
      <h2 className="font-FaroVariable text-brand-badge-yellow">GF</h2>
    </div>
  );
}

export function VeganBullet() {
  return (
    <div className="w-8 h-8 flex justify-center items-center bg-brand-red rounded-full">
      <h2 className="font-FaroVariable text-brand-badge-yellow">V</h2>
    </div>
  );
}

export function DFBullet() {
  return (
    <div className="w-8 h-8 flex justify-center items-center bg-brand-red rounded-full">
      <h2 className="font-FaroVariable text-brand-badge-yellow">DF</h2>
    </div>
  );
}
