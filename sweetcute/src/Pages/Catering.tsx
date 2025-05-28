import { Helmet } from 'react-helmet';
import { DFBullet, GFBullet, VeganBullet } from '../Components/FlavorCards';
import { cateringFlavors, CateringTier, cateringTiers } from '../data';

export function Catering() {
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
            Artisanal Ice Cream Catering
          </h2>
          <h2 className="font-FaroVariable text-black text-xl md:text-4xl my-10 mb-4 underline">
            Package Tiers
          </h2>
          <div className="flex flex-wrap justify-between mx-3 md:mx-16">
            {cateringTiers.map((tier, index) => (
              <PackageCard key={index} tier={tier} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center mx-3 md:mx-16">
            <div className="basis-[40%] h-64 my-2 md:my-4 rounded-2xl">
              <div className="relative w-full h-full rounded-2xl">
                <div className="absolute w-full rounded-2xl h-full backface-hidden flex items-center justify-center bg-[#94cbf8]">
                  <div className=" h-full w-full rounded-2xl flex flex-col justify-center items-center">
                    <div className="w-full text-center flex justify-center mt-5">
                      <h3 className="text-black font-FaroVariable text-base md:text-xl xl:text-3xl p-2  bg-white rounded-xl w-fit h-fit">
                        All Packages Include
                      </h3>
                    </div>
                    <div className="relative ">
                      <ul className="text-black font-PoppinsLight text-xs md:text-lg xl:text-xl p-2 pt-3 lg:p-6 text-left list-disc">
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
          <h2 className="font-FaroVariable text-black text-xl md:text-4xl my-10 mb-4 underline">
            Flavors:
          </h2>
          <div className="relative ">
            <ul className="text-black font-PoppinsLight text-xs md:text-lg xl:text-xl p-2 pt-3 lg:p-6 text-left list-disc">
              {cateringFlavors.map((flavor, index) => {
                return (
                  <li key={index} className="my-2">
                    <div className="flex justify-between">
                      <h4>{flavor.title}</h4>
                      <div className="flex justify-center w-1/4">
                        {flavor.isVegan ? (
                          <div className="inline mx-2">
                            <VeganBullet />
                          </div>
                        ) : (
                          ''
                        )}
                        {flavor.isDairyFree ? (
                          <div className="inline mx-2">
                            <DFBullet />
                          </div>
                        ) : (
                          ''
                        )}
                        {flavor.isGF ? (
                          <div className="inline mx-2">
                            <GFBullet />
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex w-1/2 justify-center items-start m-auto text-center">
            <div className="px-4 flex flex-col justify-center items-center">
              <GFBullet />
              <h2 className="text-black font-MyriadPro">Gluten Free</h2>
            </div>
            <div className="px-4 flex flex-col justify-center items-center">
              <VeganBullet />
              <h2 className="text-black font-MyriadPro">Vegan</h2>
            </div>
            <div className="px-4 flex flex-col justify-center items-center">
              <DFBullet />
              <h2 className="text-black font-MyriadPro">Dairy Free</h2>
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
    <div className="basis-[23%] h-60 my-2 md:my-4 rounded-2xl">
      <div className="relative w-full h-full rounded-2xl">
        <div className="absolute w-full rounded-2xl h-full backface-hidden flex items-center justify-center bg-[#94cbf8]">
          <div className=" h-full w-full rounded-2xl flex flex-col justify-center items-center">
            <div className="basis-[25%] w-full text-center flex justify-center mt-5">
              <h3 className="text-black font-FaroVariable text-base md:text-xl xl:text-3xl p-2 bg-white rounded-xl w-fit h-fit">
                {tier.guestRange} GUESTS
              </h3>
            </div>
            <div className="basis-[40%] relative text-center mt-5">
              <h2 className="text-[#FF0000] font-FaroVariable text-base md:text-3xl px-2 md:px-6 overflow-visible leading-none relative">
                ${tier.price}
              </h2>
            </div>
            <div className="basis-[35%] text-center relative text-black font-PoppinsLight text-xs md:text-lg xl:text-xl p-2 pt-3 lg:p-6">
              <h3>{tier.flavorCount} Flavors</h3>
              <h3>${tier.addFlavorPrice} for additional flavor</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
