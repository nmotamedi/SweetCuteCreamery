import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="text-center">FALL BACK IN LOVE WITH ICE CREAM</div>
      <div className="flex justify-evenly relative">
        <div className="w-1/4 mr-10 relative">
          <img
            src="../../Screen Shot 2024-10-02 at 11.42.28 AM.png"
            alt="Banana Chocolate Chip Ice Cream in front of a banana tablecloth"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-20 rounded-md"></div>
          <div className="absolute top-1/2 bottom-1/2 flex ">
            <h2 className="-rotate-45 text-[#9F2B93] text-xl">
              HANDMADE CUSTARD-BASED ICE CREAM
            </h2>
          </div>
        </div>
        <div className="w-1/4 mr-10 relative">
          <img
            src="../../Screen Shot 2024-10-02 at 11.43.53 AM.png"
            alt="Kiwi Pomogranate Ice Cream in a bowl next to a plant"
            className="w-full"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-20 rounded-md"></div>
          <div className="absolute top-1/2 bottom-1/2">
            <h2 className="rotate-45 text-[#00AFF0] text-xl">
              QUALITY INGREDIENTS NO FLUFF! JUST THE GOOD STUFF!
            </h2>
          </div>
        </div>
        <div className="absolute flex justify-center items-center top-1/2 bottom-1/2">
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
