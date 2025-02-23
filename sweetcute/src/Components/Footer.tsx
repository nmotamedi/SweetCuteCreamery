import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="w-full bg-[#FFB0AA]">
      <div className=" flex">
        <div className="basis-1/2 m-10">
          <div className="w-2/3 md:w-1/3 mb-10">
            <Link to="/">
              <img
                src="/Sweet_Cute_Title.png"
                className="w-full hover:invert"
                alt="Sweet Cute Title Icon"
              />
            </Link>
          </div>
          <ul className="text-[#FF0000] font-PoppinsBold ml-2">
            <li>
              <Link to="/about" className="hover:text-[#85D3A5]">
                About
              </Link>
            </li>
            <li>
              <Link to="/flavors" className="hover:text-[#85D3A5]">
                Flavors
              </Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-[#85D3A5]">
                Order
              </Link>
            </li>
          </ul>
        </div>
        <div className="basis-1/2 flex flex-col sm:flex-row justify-around items-center">
          <a
            className="rounded-full w-24 h-24 bg-[#FF0000] hover:bg-[#85D3A5] flex justify-center items-center"
            href="https://www.instagram.com/sweetcuteicecream/"
          >
            <img
              className="w-12"
              src="Instagram_Glyph_White.png"
              alt="Instagram Logo in white"
            />
          </a>
          <a
            className="rounded-full w-24 h-24 bg-[#FF0000] hover:bg-[#85D3A5] flex justify-center items-center"
            href="https://g.page/r/CYap19fkGsPtECA/review"
          >
            <p className="font-PoppinsLight text-white text-center">
              Leave a review!
            </p>
          </a>
        </div>
      </div>
      <footer className="text-center text-[#ff0000ce] text-xs md:text-sm">
        Designed by Meagan Rafferty. Developed by Nader Motamedi.
      </footer>
    </div>
  );
}
