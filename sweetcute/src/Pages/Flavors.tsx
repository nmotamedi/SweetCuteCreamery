import { useState } from "react";
import { flavors } from "../data";
import { Helmet } from "react-helmet-async";
import {
  DFBullet,
  FlavorCards,
  GFBullet,
  VeganBullet,
} from "../Components/FlavorCards";

export function FlavorsPage() {
  const [descIsOpen, setDescIsOpen] = useState<string>();

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.sweetcuteicecream.com/flavors"
        />
      </Helmet>
      <div className="flex flex-col items-center relative flex-wrap bg-brand-yellow w-full">
        <div className="w-full h-1/4 flex">
          <div className="basis-1/3 ">
            <img
              alt="Pints of Sweet Cute Ice Cream"
              className="w-full  "
              src="/sweet_cute_branding_photos/img11.webp"
              width={1280}
              height={914}
            />
          </div>
          <div className="basis-1/3">
            <img
              alt="Hand holding a pint of chocolate Sweet Cute ice cream"
              className="w-full  "
              src="/sweet_cute_branding_photos/img3.webp"
              width={1280}
              height={914}
            />
          </div>
          <div className="basis-1/3">
            <img
              alt="Hand holding a cone of Sweet Cute ice cream"
              className="w-full  "
              src="/sweet_cute_branding_photos/img6.webp"
              width={1280}
              height={914}
            />
          </div>
        </div>
        <div className="text-center py-1 md:pb-4 pb-20 w-full">
          <h2 className="font-FaroVariable text-brand-red-text md:text-brand-red text-xl md:text-4xl my-10 mb-4 underline">
            OUR FOREVER FLAVORS
          </h2>
          <div className="flex flex-wrap justify-between mx-3 md:mx-16">
            {flavors.foreverFlavors.map((flavor) => (
              <FlavorCards
                flavor={flavor}
                key={flavor.title}
                isDescOpen={descIsOpen === flavor.title}
                handleChange={(flavor: string | undefined) =>
                  setDescIsOpen(flavor)
                }
              />
            ))}
          </div>
          <div className="flex w-1/2 justify-center items-start m-auto text-center">
            <div className="px-4 flex flex-col justify-center items-center">
              <GFBullet />
              <h2 className="text-brand-red-text font-MyriadPro">Gluten Free</h2>
            </div>
            <div className="px-4 flex flex-col justify-center items-center">
              <VeganBullet />
              <h2 className="text-brand-red-text font-MyriadPro">Vegan</h2>
            </div>
            <div className="px-4 flex flex-col justify-center items-center">
              <DFBullet />
              <h2 className="text-brand-red-text font-MyriadPro">Dairy Free</h2>
            </div>
          </div>
          <h2 className="font-FaroVariable text-brand-red-text md:text-brand-red text-xl md:text-4xl my-16 mb-1 md:mb-10 underline">
            OUR SIDE PIECES (in rotation)
          </h2>
          <ul>
            {flavors.sidePieces.map((flavor) => (
              <li
                key={flavor.id}
                className="font-FaroVariable text-brand-red-text text-sm md:text-xl"
              >
                {flavor.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center py-2 md:py-6 pb-36 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="m-auto">
            <path id="curve" d="M50 100 Q150 55 250 100" fill="transparent" />
            <text className="fill-brand-red-text md:fill-brand-red" fontSize="36" fontFamily="FaroVariableDisplay">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                FALL BACK
              </textPath>
            </text>
          </svg>
          <h2 className="font-FaroVariable text-brand-red-text md:text-brand-red text-xl md:text-4xl -mt-8">
            IN LOVE
            <br />
            WITH ICE CREAM
          </h2>
        </div>
        <div className="w-1/4 flex justify-center pb-12">
          <img
            src="/ice-cream-illustration.webp"
            width={960}
            height={1094}
            loading="lazy"
            className="w-full"
            alt="Image of 2 cones of ice cream in love"
          />
        </div>
      </div>
    </>
  );
}
