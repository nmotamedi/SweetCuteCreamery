import { Helmet } from "react-helmet";
import {
  DFBullet,
  FlavorCards,
  GFBullet,
  VeganBullet,
} from "../Components/FlavorCards";
import { cateringFlavors, CateringTier, cateringTiers } from "../data";
import { useState } from "react";

export function Catering() {
  const [descIsOpen, setDescIsOpen] = useState<string>();
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.sweetcuteicecream.com/catering"
        />
      </Helmet>
      <div className="flex flex-col items-center relative flex-wrap bg-[#FAE498] w-full min-h-svh">
        <div className="text-center py-1 md:pb-4 pb-20 w-full">
          <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl my-10 mb-4 underline">
            Artisan Ice Cream Catering
          </h2>
          <div className="flex flex-wrap justify-between mx-3 md:mx-16">
            {cateringTiers.map((tier, index) => (
              <PackageCard key={index} tier={tier} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center mx-3 md:mx-16">
            <div className="basis-[50%] h-72 my-2 md:my-4 rounded-2xl">
              <div className={`relative w-full h-full rounded-2xl`}>
                <div className="absolute w-full rounded-2xl h-full backface-hidden flex items-center justify-center bg-[#FFF5C1]">
                  <div className=" h-full w-full rounded-2xl flex flex-col justify-center items-center">
                    <div className="basis-[25%] w-full h-8 text-center">
                      All Packages Include
                    </div>
                    <div className="basis-[75%] relative text-center">
                      <ul>
                        <li>Hand Scooped Premium Ice Cream</li>
                        <li>1 Scooper</li>
                        <li>2 Hours of service (plus 30 minute set up)</li>
                        <li>Sweet Cute Ice Cream cart w/ umbrella</li>
                        <li>Cups, spoons, and napkins</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-1 md:pb-4 pb-20 w-full flex flex-col items-center">
          <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl my-10 mb-4 underline">
            Flavors:
          </h2>
          <div className="flex flex-wrap justify-between content-center mx-3 md:mx-16 w-[70%]">
            {cateringFlavors.map((flavor) => (
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
          <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl my-10 mb-4">
            <em>Contact Us for Seasonal Flavors</em>
          </h2>
        </div>
      </div>
    </>
  );
}

function PackageCard({ tier }: { tier: CateringTier }) {
  return (
    <div className="basis-[20%] h-72 my-2 md:my-4 rounded-2xl">
      <div className={`relative w-full h-full rounded-2xl`}>
        <div className="absolute w-full rounded-2xl h-full backface-hidden flex items-center justify-center bg-[#FFF5C1]">
          <div className=" h-full w-full rounded-2xl flex flex-col justify-center items-center">
            <div className="basis-[25%] w-full h-8 text-center">
              {tier.guestRange} GUESTS
            </div>
            <div className="basis-[40%] relative text-center">
              <h2 className="text-[#FF0000] font-FaroVariable text-base md:text-3xl px-2 md:px-6 overflow-visible leading-none relative -top-2">
                ${tier.price}
              </h2>
            </div>
            <div className="basis-[35%] lg:h-36 h-24 text-center relative">
              <h3>{tier.flavorCount} Flavors</h3>
              <h3>${tier.addFlavorPrice} for additional flavor</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
