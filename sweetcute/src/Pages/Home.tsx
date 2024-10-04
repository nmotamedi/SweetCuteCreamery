import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="text-center py-6">FALL BACK IN LOVE WITH ICE CREAM</div>
      <div className="flex justify-evenly relative pb-36 md:pb-48 flex-wrap">
        <div className="w-5/12 md:w-1/4 relative">
          <img
            src="../../Screen Shot 2024-10-02 at 11.42.28 AM.png"
            alt="Banana Chocolate Chip Ice Cream in front of a banana tablecloth"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-70 rounded-md"></div>
          <div className="absolute inset-0 flex justify-center items-center -rotate-45">
            <h2 className=" text-[#d52fc4] text-center text-base md:text-3xl font-extrabold">
              HANDMADE
              <br />
              CUSTARD-BASED
              <br />
              ICE CREAM
            </h2>
          </div>
        </div>
        <div className="w-5/12 md:w-1/4 relative">
          <img
            src="../../2CB1323C-5887-4D45-860C-1BEAA1C70400_1_201_a.jpg"
            alt="A hand holding a pint of Sweet Cute Ice Cream"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-70 rounded-md"></div>
          <div className="absolute inset-0 flex justify-center items-center rotate-45">
            <h2 className=" text-center text-[#00AFF0] text-base md:text-xl font-extrabold">
              QUALITY INGREDIENTS!
              <br />
              NO FLUFF!
              <br />
              JUST THE GOOD STUFF!
            </h2>
          </div>
        </div>
        <div className="relative md:absolute flex justify-center items-center top-1/2 bottom-1/2 mt-40 mb-48 md:m-0">
          <Link to="/order">
            <div className="rounded-full bg-pink-400 border border-black w-fit h-fit">
              <h2 className="text-center justify-center p-16">
                Click here to order
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
