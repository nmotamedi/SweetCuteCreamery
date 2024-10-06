export function Home() {
  return (
    <>
      <div className="flex flex-col justify-evenly items-center relative pb-36 md:pb-48 flex-wrap bg-[#FAE498]">
        <div className="text-center py-6 pb-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="m-auto">
            <path id="curve" d="M50 100 Q150 55 250 100" fill="transparent" />
            <text
              fill="#FF0000"
              font-size="36"
              fontFamily="FaroVariableDisplay"
            >
              <textPath href="#curve" startOffset="50%" text-anchor="middle">
                HAND MADE
              </textPath>
            </text>
          </svg>
          <h2 className="font-FaroVariable text-[#FF0000] text-4xl -mt-8">
            CUSTARD
            <br />
            BASED ICE CREAM
          </h2>
        </div>
        <div className="w-7/12">
          <img
            src="/Sweet_Cute_Title.png"
            className="w-full"
            alt="Sweet Cute Title Icon"
          />
        </div>
        <h2 className="text-center font-FaroVariable text-[#FF0000] text-2xl my-12">
          NO FLUFF
          <br />
          JUST THE GOOD STUFF
        </h2>
        <div className="text-center py-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="m-auto">
            <path id="curve" d="M50 100 Q150 55 250 100" fill="transparent" />
            <text
              fill="#FF0000"
              font-size="36"
              fontFamily="FaroVariableDisplay"
            >
              <textPath href="#curve" startOffset="50%" text-anchor="middle">
                FALL BACK
              </textPath>
            </text>
          </svg>
          <h2 className="font-FaroVariable text-[#FF0000] text-4xl -mt-8">
            IN LOVE
            <br />
            WITH ICE CREAM
          </h2>
        </div>
      </div>
    </>
  );
}
