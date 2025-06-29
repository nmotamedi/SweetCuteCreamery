import { useEffect, useRef, useState } from 'react';

export function CateringImageLayoutCookies() {
  const middleRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (middleRef.current) {
        setCardHeight(middleRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="flex flex-wrap justify-center mx-3 md:mx-16">
      {/* Left Image */}
      <div
        className="basis-[60%] lg:basis-[28%] lg:mr-2 drop-shadow-xl"
        style={{ height: cardHeight ? `${cardHeight}px` : 'auto' }}
      >
        <div className="rounded-xl w-full h-full">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/catering_imgs/IMG_0773.jpeg"
            alt="Ice cream sandwich"
          />
        </div>
      </div>

      {/* Middle Card */}
      <div
        className="basis-[60%] lg:basis-[40%] rounded-2xl h-fit"
        ref={middleRef}
      >
        <div className="relative w-full h-full rounded-2xl justify-center bg-[#94cbf8] p-2 md:p-5 drop-shadow-xl">
          <div className="w-full text-center flex justify-center p-3">
            <h3 className="text-black font-FaroVariable text-base md:text-xl xl:text-3xl bg-white rounded-xl w-fit h-fit p-3">
              $12 per person
            </h3>
          </div>
          <div className="relative p-3">
            <ul className="text-black font-PoppinsLight text-sm md:text-lg xl:text-xl text-center">
              <li>
                Your choice of 2 flavors of Ice Cream on scratch made Chocolate
                Chip Cookies.
              </li>
              <li>
                Pre-packaged, ready to hand out to your guests from our ice
                cream cart!
              </li>
            </ul>
          </div>
          <div className="w-full text-center flex justify-center p-3">
            <h3 className="text-black font-FaroVariable text-sm md:text-lg xl:text-xl bg-white rounded-xl w-fit h-fit p-3">
              $8 per sandwich for pickup
            </h3>
          </div>
          <div className="w-full text-center flex justify-center p-3">
            <h3 className="text-black font-PoppinsLight text-sm md:text-lg xl:text-xl text-center underline">
              Max order - 100 sandwiches
            </h3>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        className=" basis-[60%] lg:basis-[28%] lg:ml-2 drop-shadow-xl"
        style={{ height: cardHeight ? `${cardHeight}px` : 'auto' }}
      >
        <div className="rounded-xl w-full h-full">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="/catering_imgs/IMG_0791.jpg"
            alt="Ice cream cart"
          />
        </div>
      </div>
    </div>
  );
}
