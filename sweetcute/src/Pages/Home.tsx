import { useRef } from "react";
import { Quiz } from "../Components/Quiz";
import { Carousel } from "../Components/Carousel";
import { Helmet } from "react-helmet-async";

export function Home() {
  const modal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.sweetcuteicecream.com/" />
      </Helmet>
      <div className="flex flex-col justify-evenly items-center relative flex-wrap bg-brand-yellow">
        <a
          onClick={() => modal.current?.showModal()}
          className="hover:cursor-pointer h-24 w-24 sm:h-40 sm:w-40 lg:h-56 lg:w-56 rounded-full bg-brand-blue flex justify-center items-center absolute bottom-[52%] sm:bottom-auto sm:top-10 left-2 sm:left-3 lg:left-[10%] hover:drop-shadow-2xl font-FaroVariable text-black text-[0.67rem] sm:text-xl lg:text-3xl -rotate-12 p-3 uppercase text-center z-20"
        >
          QUIZ:
          <br />
          What flavor are you?
        </a>
        <div className="w-8/12 lg:w-5/12">
          <img
            src="/sweet-cute-title.webp"
            width={1600}
            height={780}
            className="w-full"
            alt="Sweet Cute Title Icon"
          />
        </div>
        <div className="w-10/12 lg:w-7/12 my-10">
          <Carousel />
        </div>
        <div className="w-10/12 lg:w-7/12 mt-20 sm:mt-auto my-10 md:py-12">
          <h2 className="font-FaroVariable text-brand-red-text md:text-brand-red text-xl md:text-4xl uppercase text-center">
            Come visit us at{" "}
            <a
              className="underline"
              href="https://maps.app.goo.gl/7dViRS66yYtGGmM3A"
            >
              Banyan Tree Marketplace
            </a>{" "}
            in Culver City for a scoop!
            <br />
            <br />
            Follow us on{" "}
            <a
              className="underline"
              href="https://www.instagram.com/sweetcuteicecream/"
            >
              Instagram
            </a>{" "}
            for our weekly schedule
          </h2>
        </div>
        <div className="text-center md:py-3 pb-9 md:pb-12">
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
        <div className="w-5/12 flex justify-center">
          <img
            src="/ice-cream-illustration-cut.webp"
            width={1595}
            height={1427}
            loading="lazy"
            alt="2 Ice cream cones in love"
            className="w-full"
          />
        </div>
        <dialog
          ref={modal}
          className="bg-brand-blue w-3/4 rounded-3xl h-3/4 sm:h-2/3 border-white border-8 backdrop:backdrop-blur-xl outline-none"
        >
          <div className="w-full h-full text-center  flex flex-col items-center">
            <a
              className="basis-1/12 self-end pt-6 pr-6 hover:text-brand-red-text hover:cursor-pointer text-3xl font-MyriadPro  text-black"
              onClick={() => modal.current?.close()}
            >
              X
            </a>
            <div className="basis-11/12 w-full p-4 sm:p-16 flex flex-col items-center justify-center font-FaroVariable text-black">
              <Quiz />
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
