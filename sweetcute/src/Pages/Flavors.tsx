import { useEffect, useState } from "react";
import { flavors } from "../data";
import { Flavors } from "../data";

export function FlavorsPage() {
  const [descIsOpen, setDescIsOpen] = useState<string>();

  return (
    <div className="flex flex-col justify-between items-center relative flex-wrap bg-[#FAE498] w-full">
      <div className="w-full h-96 flex">
        <div className="basis-1/3">
          <img
            alt="Pints of Sweet Cute Ice Cream"
            className="w-full  "
            src="/sweet_cute_branding_photos/img11.jpeg"
          />
        </div>
        <div className="basis-1/3">
          <img
            alt="Hand holding a pint of chocolate Sweet Cute ice cream"
            className="w-full  "
            src="/sweet_cute_branding_photos/img3.jpeg"
          />
        </div>
        <div className="basis-1/3">
          <img
            alt="Hand holding a cone of Sweet Cute ice cream"
            className="w-full  "
            src="/sweet_cute_branding_photos/img10.jpeg"
          />
        </div>
      </div>
      <div className="text-center py-1 md:py-4 pb-20 w-full">
        <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl my-10 md:my-16 mb-4 underline">
          OUR FOREVER FLAVORS
        </h2>
        <div className="flex flex-wrap justify-between mx-3 md:mx-16">
          {flavors.foreverFlavors.map((flavor) => (
            <FlavorCards
              flavor={flavor}
              key={flavor.title}
              isDescOpen={descIsOpen === flavor.title}
            />
          ))}
        </div>
        <div className="flex w-1/2 justify-center items-start m-auto text-center">
          <div className="px-4 flex flex-col justify-center items-center">
            <GFBullet />
            <h2 className="text-[#FF0000] font-MyriadPro">Gluten Free</h2>
          </div>
          <div className="px-4 flex flex-col justify-center items-center">
            <VeganBullet />
            <h2 className="text-[#FF0000] font-MyriadPro">Vegan</h2>
          </div>
          <div className="px-4 flex flex-col justify-center items-center">
            <DFBullet />
            <h2 className="text-[#FF0000] font-MyriadPro">Dairy Free</h2>
          </div>
        </div>
        <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl my-16 mb-1 md:mb-10 underline">
          OUR SIDE PIECES (in rotation)
        </h2>
        <ul>
          {flavors.sidePieces.map((flavor) => (
            <li
              key={flavor.id}
              className="font-FaroVariable text-[#FF0000] text-sm md:text-xl"
            >
              {flavor.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center py-2 md:py-6 pb-36 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto">
          <path id="curve" d="M50 100 Q150 55 250 100" fill="transparent" />
          <text fill="#FF0000" fontSize="36" fontFamily="FaroVariableDisplay">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              FALL BACK
            </textPath>
          </text>
        </svg>
        <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl -mt-8">
          IN LOVE
          <br />
          WITH ICE CREAM
        </h2>
      </div>
      <div className="w-1/4 flex justify-center pb-12">
        <img
          src="/SweetCute_IceCream_Illustration.png"
          className="w-full"
          alt="Image of 2 cones of ice cream in love"
        />
      </div>
    </div>
  );

  function FlavorCards({
    flavor,
    isDescOpen,
  }: {
    flavor: Flavors;
    isDescOpen: boolean;
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
          <div className="absolute w-full rounded-2xl h-full backface-hidden flex items-center justify-center bg-[#FFF5C1]">
            <div
              className=" h-full w-full rounded-2xl flex flex-col justify-center items-center"
              onClick={() => setDescIsOpen(flavor.title)}
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
                    />
                  </div>
                )}
              </div>
              <div className="basis-[25%] relative flex items-center justify-center">
                <h2 className="text-[#FF0000] font-FaroVariable text-base md:text-3xl px-2 md:px-6 overflow-visible leading-none relative -top-2">
                  {flavor.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute w-full rounded-2xl h-full backface-hidden flex items-center justify-center bg-[#FFB0AA] rotate-y-180">
            <div
              className=" flex w-full h-full flex-col justify-center items-center"
              onClick={() => {
                setDescIsOpen(undefined);
                setisFlipped(false);
              }}
            >
              <div className="basis-1/3">
                <h2 className="text-[#FF0000] font-FaroVariable text-base md:text-xl xl:text-3xl p-2 pt-3 lg:p-6">
                  {flavor.title}
                </h2>
              </div>
              <div className="basis-2/3 ">
                <h2 className="text-[#FF0000] font-PoppinsLight text-xs md:text-lg xl:text-xl p-2 pt-3 lg:p-6">
                  {flavor.description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function GFBullet() {
    return (
      <div className="w-8 h-8 flex justify-center items-center bg-[#FF0000] rounded-full">
        <h2 className="font-FaroVariable text-[#FEE38C]">GF</h2>
      </div>
    );
  }

  function VeganBullet() {
    return (
      <div className="w-8 h-8 flex justify-center items-center bg-[#FF0000] rounded-full">
        <h2 className="font-FaroVariable text-[#FEE38C]">V</h2>
      </div>
    );
  }

  function DFBullet() {
    return (
      <div className="w-8 h-8 flex justify-center items-center bg-[#FF0000] rounded-full">
        <h2 className="font-FaroVariable text-[#FEE38C]">DF</h2>
      </div>
    );
  }
}
