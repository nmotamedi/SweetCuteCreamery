import { useEffect, useState } from "react";
import img2 from "/sweet_cute_branding_photos/img2.jpeg";
import img4 from "/sweet_cute_branding_photos/img4.jpeg";
import img6 from "/sweet_cute_branding_photos/img6.jpeg";
import img7 from "/sweet_cute_branding_photos/img7.jpeg";
import img8 from "/sweet_cute_branding_photos/img8.jpeg";
import img9 from "/sweet_cute_branding_photos/img9.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faIceCream } from "@fortawesome/free-solid-svg-icons";

const imgObj: { src: string; circleText?: string }[] = [
  {
    src: img6,
    circleText: `SMALL BATCH\nCUSTARD BASED\nICE CREAM`,
  },
  {
    src: img4,
    circleText: `REAL CREAM,\nREAL CHOCOLATE,\nREAL FRUIT\nAND REAL LOVE\nIN EVERY PINT`,
  },
  {
    src: img2,
    circleText: `SCRATCH MADE\nWITH CLEAN INGREDIENTS\nAND NO ARTIFICIAL STABILIZERS/GUMS`,
  },
  { src: img9, circleText: "CLASSIC NOSTALGIC FLAVORS" },
  { src: img7 },
  { src: img8 },
];

export function Carousel() {
  const [currentShowing, setCurrentShowing] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShowing((currentShowing + 1) % imgObj.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentShowing]);

  return (
    <div className="flex flex-col items-center drop-shadow-xl">
      <div className="flex justify-between select-none">
        <div
          onClick={() => {
            setCurrentShowing(
              currentShowing - 1 === -1 ? imgObj.length - 1 : currentShowing - 1
            );
          }}
          className="cursor-pointer flex items-center"
        >
          <FontAwesomeIcon
            icon={faCaretLeft}
            size="4x"
            className="hover:text-[#69D6A1]"
          />
        </div>
        <div>{imgObj.map((card, index) => CarouselCard(card, index))}</div>
        <div
          className="cursor-pointer flex items-center"
          onClick={() => {
            setCurrentShowing((currentShowing + 1) % imgObj.length);
          }}
        >
          <FontAwesomeIcon
            icon={faCaretRight}
            size="4x"
            className="hover:text-[#69D6A1]"
          />
        </div>
      </div>
      <div className="flex justify-evenly w-1/2 my-3">
        {[0, 1, 2, 3, 4, 5].map((num) => {
          return (
            <FontAwesomeIcon
              key={num}
              icon={faIceCream}
              size="2x"
              onClick={() => {
                setCurrentShowing(num);
              }}
              color={num !== currentShowing ? "black" : "red"}
              className="cursor-pointer hover:text-[#69D6A1]"
            />
          );
        })}
      </div>
    </div>
  );

  function CarouselCard(
    card: { src: string; circleText?: string },
    index: number
  ) {
    return (
      <div
        className={`w-full transition-opacity duration-500 ease-in-out ${
          index !== currentShowing
            ? "opacity-0 invisible absolute z-[-1]"
            : "opacity-100 visible static"
        }`}
        key={index}
      >
        {card.circleText && (
          <div
            className={`absolute rounded-full w-64 h-64  font-FaroVariable text-white text-xl -top-8 text-center  drop-shadow-2xl flex flex-col items-center justify-center ${
              index % 2 === 0
                ? "-right-8 bg-[#7FBEF0] rotate-12"
                : "-left-8 bg-[#FF0000] -rotate-12"
            }`}
          >
            {card.circleText.split("\n").map((str) => (
              <p className="font-PoppinsBold">{str}</p>
            ))}
          </div>
        )}
        <div className="w-full rounded-xl">
          <img className="w-full rounded-xl" src={card.src} />
        </div>
      </div>
    );
  }
}
