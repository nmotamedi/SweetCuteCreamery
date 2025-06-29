import { useRef, useState, useEffect } from 'react';

export function CateringImageLayoutMain() {
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
    <div className="flex flex-wrap justify-center mx-3 md:mx-16 ">
      <div
        className="basis-[90%] sm:basis-[28%] sm:mr-2 drop-shadow-xl"
        style={{ height: cardHeight ? `${cardHeight}px` : 'auto' }}
      >
        <div className="rounded-xl w-full h-full">
          <img
            className="w-full h-full object-cover object-left rounded-xl"
            src="/catering_imgs/IMG_0740.jpg"
          />
        </div>
      </div>
      <div
        className="basis-[90%] sm:basis-[40%] rounded-2xl h-fit"
        ref={middleRef}
      >
        <div className="relative w-full h-full rounded-2xl bg-[#94cbf8] p-2 md:p-5 drop-shadow-xl">
          <div className="w-full text-center flex justify-center mt-5">
            <h3 className="text-black font-FaroVariable text-base md:text-xl xl:text-3xl p-2  bg-white rounded-xl w-fit h-fit drop-shadow-xl">
              All Packages Include
            </h3>
          </div>
          <div className="relative ">
            <ul className="text-black font-PoppinsLight text-sm md:text-lg xl:text-xl pl-4 md:pl-0 p-2 pt-3 lg:p-6 text-left list-disc">
              <li>Hand Scooped Premium Ice Cream</li>
              <li>1 Scooper</li>
              <li>2 Hours of service (plus 30 minute set up)</li>
              <li>Sweet Cute Ice Cream cart w/ umbrella</li>
              <li>Cups, spoons, and napkins</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="basis-[90%] sm:basis-[28%] sm:ml-2 drop-shadow-xl"
        style={{ height: cardHeight ? `${cardHeight}px` : 'auto' }}
      >
        <div className="rounded-xl w-full h-full">
          <img
            className="w-full h-full object-cover object-center rounded-xl"
            src="/catering_imgs/IMG_0741.jpg"
          />
        </div>
      </div>
    </div>
  );
}
