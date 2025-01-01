import { useState } from "react";
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
    circleText: `SMALL BATCH CUSTARD BASED\nICE CREAM`,
  },
  {
    src: img4,
    circleText: `REAL CREAM,\nREAL CHOCOLATE, REAL FRUIT\nAND REAL LOVE IN EVERY PINT`,
  },
  {
    src: img2,
    circleText: `SCRATCH MADE WITH CLEAN INGREDIENTS\nAND NO ARTIFICIAL STABILIZERS/GUMS`,
  },
  { src: img9, circleText: "CLASSIC NOSTALGIC FLAVORS" },
  { src: img7 },
  { src: img8 },
];

export function Carousel() {
  const [currentShowing, setCurrentShowing] = useState(0);

  setTimeout(() => {
    setCurrentShowing((currentShowing + 1) % imgObj.length);
  }, 3000);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between select-none">
        <div
          onClick={() =>
            setCurrentShowing(
              currentShowing - 1 === -1 ? imgObj.length - 1 : currentShowing - 1
            )
          }
          className="cursor-pointer flex items-center"
        >
          <FontAwesomeIcon
            icon={faCaretLeft}
            size="4x"
            className="hover:text-gray-400"
          />
        </div>
        <div>{imgObj.map((card, index) => CarouselCard(card, index))}</div>
        <div
          className="cursor-pointer flex items-center"
          onClick={() =>
            setCurrentShowing((currentShowing + 1) % imgObj.length)
          }
        >
          <FontAwesomeIcon
            icon={faCaretRight}
            size="4x"
            className="hover:text-gray-400"
          />
        </div>
      </div>
      <div className="flex">
        {[0, 1, 2, 3, 4, 5].map((num) => {
          return (
            <FontAwesomeIcon
              key={num}
              icon={faIceCream}
              size="3x"
              onClick={() => setCurrentShowing(num)}
              color={num !== currentShowing ? "black" : "red"}
              className="cursor-pointer"
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
        className={`relative w-full transition-transform duration-500 ease-in-out ${
          index !== currentShowing ? "hidden" : ""
        }`}
        key={index}
      >
        {card.circleText && (
          <div
            className={`absolute rounded-full w-52 h-52  font-FaroVariable text-white -top-8 text-center flex items-center -rotate-12 ${
              index % 2 === 0 ? "-right-8 bg-blue-600" : "-left-8 bg-red-700"
            }`}
          >
            <h2 className="font-PoppinsBold">{card.circleText}</h2>
          </div>
        )}
        <div className="w-full rounded-xl">
          <img className="w-full rounded-xl" src={card.src} />
        </div>
      </div>
    );
  }
}
