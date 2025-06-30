import React, { useRef, useEffect, useState } from 'react';

type Props = {
  leftImageSrc: string;
  rightImageSrc: string;
  leftImageObject?: string;
  rightImageObject?: string;
  middleCard: React.ReactNode;
  className?: string;
  columnClasses?: {
    left: string;
    middle: string;
    right: string;
  };
};

export function CateringImageLayout({
  leftImageSrc,
  rightImageSrc,
  leftImageObject = 'object-center',
  rightImageObject = 'object-center',
  middleCard,
  className = '',
  columnClasses = {
    left: 'basis-[90%] sm:basis-[28%] sm:mr-2',
    middle: 'basis-[90%] sm:basis-[40%]',
    right: 'basis-[90%] sm:basis-[28%] sm:ml-2',
  },
}: Props) {
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
    <div className={`flex flex-wrap justify-center mx-3 md:mx-16 ${className}`}>
      {/* Left Image */}
      <div
        className={`${columnClasses.left}`}
        style={{ height: cardHeight ? `${cardHeight}px` : 'auto' }}
      >
        <div className="rounded-xl w-full h-full">
          <img
            className={`w-full h-full object-cover rounded-xl ${leftImageObject}`}
            src={leftImageSrc}
            alt=""
          />
        </div>
      </div>

      {/* Middle Card */}
      <div
        className={`${columnClasses.middle} rounded-2xl h-fit`}
        ref={middleRef}
      >
        {middleCard}
      </div>

      {/* Right Image */}
      <div
        className={`${columnClasses.right}`}
        style={{ height: cardHeight ? `${cardHeight}px` : 'auto' }}
      >
        <div className="rounded-xl w-full h-full">
          <img
            className={`w-full h-full object-cover rounded-xl ${rightImageObject}`}
            src={rightImageSrc}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
