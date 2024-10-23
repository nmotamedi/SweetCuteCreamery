import { useRef } from "react";
import { Quiz } from "../Components/Quiz";

export function Home() {
  const modal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="flex flex-col justify-evenly items-center relative flex-wrap bg-[#FAE498]">
        <a
          onClick={() => modal.current?.showModal()}
          className="hover:cursor-pointer h-20 w-20 sm:h-36 sm:w-36 lg:h-52 lg:w-52 rounded-full bg-[#7FBEF0] flex justify-center items-center absolute top-0 sm:top-[10%] left-3 sm:left-[10%] hover:drop-shadow-2xl font-FaroVariable text-white text-xs sm:text-xl lg:text-3xl -rotate-12 p-3 uppercase text-center"
        >
          What flavor are you?
        </a>
        <div className="text-center py-6 pb-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="m-auto">
            <path id="curve" d="M50 100 Q150 55 250 100" fill="transparent" />
            <text fill="#FF0000" fontSize="36" fontFamily="FaroVariableDisplay">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                HAND MADE
              </textPath>
            </text>
          </svg>
          <h2 className="font-FaroVariable text-[#FF0000] text-xl md:text-4xl -mt-8">
            CUSTARD
            <br />
            BASED ICE CREAM
          </h2>
        </div>
        <div className="w-9/12 md:w-6/12">
          <img
            src="/Sweet_Cute_Title.png"
            className="w-full"
            alt="Sweet Cute Title Icon"
          />
        </div>
        <h2 className="text-center font-FaroVariable text-[#FF0000] text-base md:text-2xl my-12">
          NO FLUFF
          <br />
          JUST THE GOOD STUFF
        </h2>
        <div className="text-center md:py-6 pb-18 md:pb-24">
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
        <div className="w-5/12 flex justify-center">
          <img
            src="/SweetCute_IceCream_Illustration_Cut.png"
            alt="2 Ice cream cones in love"
            className="w-full"
          />
        </div>
        <dialog
          ref={modal}
          className="bg-[#7FBEF0] w-3/4 rounded-3xl h-2/3 border-white border-8 backdrop:backdrop-blur-xl outline-none"
        >
          <div className="w-full h-full text-center  flex flex-col items-center">
            <a
              className="basis-1/12 self-end pt-6 pr-6 hover:text-[#FF0000] hover:cursor-pointer text-3xl font-MyriadPro  text-white"
              onClick={() => modal.current?.close()}
            >
              X
            </a>
            <div className="basis-11/12 w-full p-4 sm:p-16 flex flex-col items-center justify-center font-FaroVariable text-white">
              <Quiz />
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
