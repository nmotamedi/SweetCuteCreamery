import { useEffect, useState } from "react";
import { flavors } from "../data";
import { Flavors } from "../data";

export function FlavorsPage() {
  const [descIsOpen, setDescIsOpen] = useState<string>();

  return (
    <div className="flex flex-col justify-evenly items-center relative pb-36 md:pb-48 flex-wrap bg-[#FAE498]">
      <div className="text-center py-1 md:py-4 pb-20">
        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto">
          <path id="curve" d="M50 100 Q150 55 250 100" fill="transparent" />
          <text fill="#FF0000" fontSize="36" fontFamily="FaroVariableDisplay">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              HAND MADE
            </textPath>
          </text>
        </svg>
        <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl -mt-8 mb-10 md:mb-16">
          CUSTARD
          <br />
          BASED ICE CREAM
        </h2>
        <div className="w-3/4 md:w-1/4 m-auto">
          <img
            src="/Sweet_Cute_Title.png"
            className="w-full"
            alt="Sweet Cute Title Icon"
          />
        </div>
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
          <div className="basis-1/3 px-4 flex flex-col justify-center items-center">
            <GFBullet />
            <h2 className="text-[#FF0000] font-MyriadPro">Gluten Free</h2>
          </div>
          <div className="basis-1/3 px-4 flex flex-col justify-center items-center">
            <VeganBullet />
            <h2 className="text-[#FF0000] font-MyriadPro">Vegan</h2>
          </div>
          <div className="basis-1/3 px-4 flex flex-col justify-center items-center">
            <DFBullet />
            <h2 className="text-[#FF0000] font-MyriadPro">Dairy Free</h2>
          </div>
        </div>
        <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl my-16 mb-1 md:mb-4 underline">
          OUR SIDE PIECES (in rotation)
        </h2>
        <ul>
          {flavors.sidePieces.map((flavor) => (
            <li
              key={flavor.title}
              className="font-FaroVariable text-[#FF0000] text-sm md:text-xl"
            >
              {flavor.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center py-2 md:py-6">
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
      <div className="basis-[32%] h-64 my-2 md:my-4 rounded-2xl hover:cursor-pointer perspective-1000">
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-[#FFF5C1]">
            <div
              className=" h-full w-full flex flex-col justify-center items-center"
              onClick={() => setDescIsOpen(flavor.title)}
            >
              <div className="basis-1/3 w-full flex justify-evenly items-center">
                {flavor.isGF && <GFBullet />}
                {flavor.isVegan && <VeganBullet />}
                {flavor.isDairyFree && <DFBullet />}
              </div>
              <div className="basis-2/3 ">
                <h2 className="text-[#FF0000] font-FaroVariable text-base md:text-3xl p-2 md:p-6">
                  {flavor.title}
                </h2>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-[#FFB0AA] rotate-y-180">
            <div
              className=" flex w-full h-full flex-col justify-center items-center"
              onClick={() => {
                setDescIsOpen(undefined);
                setisFlipped(false);
              }}
            >
              <div className="basis-1/3">
                <h2 className="text-[#FF0000] font-FaroVariable text-base md:text-3xl p-1 md:p-6">
                  {flavor.title}
                </h2>
              </div>
              <div className="basis-2/3 ">
                <h2 className="text-[#FF0000] font-PoppinsLight text-xs md:text-2xl p-1 md:p-6">
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
