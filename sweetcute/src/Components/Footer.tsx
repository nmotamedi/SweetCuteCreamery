import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className="w-full bg-[#FFB0AA]">
      <div className=" flex">
        <div className="basis-1/2 m-10">
          <div className="w-2/3 md:w-1/3 mb-10">
            <Link to="/">
              <img
                src="/sweet-cute-title.webp"
                width={1600}
                height={780}
                loading="lazy"
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
            className="rounded-full mt-3 sm:mt-0 w-24 h-24 hover:invert flex justify-center items-center"
            target="_blank"
            href="https://www.zola.com/wedding-vendors/wedding-cakes-desserts/sweet-cute-ice-cream?utm_source=vendor&utm_medium=various&utm_content=badge"
          >
            <img
              className="w-full"
              alt="Featured on Zola"
              src="https://d1tntvpcrzvon2.cloudfront.net/static-assets/images/badges/featured_on_zola_v3.png"
              width={320}
              height={320}
              loading="lazy"
            />
          </a>
          <a
            className="rounded-full mt-3 sm:mt-0 w-24 h-24 bg-[#FF0000] hover:bg-[#85D3A5] flex justify-center items-center"
            href="https://www.instagram.com/sweetcuteicecream/"
          >
            <img
              className="w-12"
              src="/instagram-glyph-white.webp"
              width={96}
              height={96}
              loading="lazy"
              alt="Instagram Logo in white"
            />
          </a>
          <a
            className="rounded-full mt-3 sm:mt-0 w-24 h-24 bg-[#FF0000] hover:bg-[#85D3A5] flex justify-center items-center"
            href="https://maps.app.goo.gl/9cytRLRWYS4D2AEs7"
          >
            <img
              className="w-12 grayscale"
              src="/google-maps-icon.webp"
              width={96}
              height={138}
              loading="lazy"
              alt="Google Maps logo in white"
            />
          </a>
          <a
            className="rounded-full mt-3 mb-3 sm:mt-0 sm:mb-0 w-24 h-24 bg-[#FF0000] hover:bg-[#85D3A5] flex justify-center items-center"
            href="https://www.yelp.com/biz/sweet-cute-ice-cream-culver-city?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
          >
            <img
              className="w-12 grayscale"
              src="/yelp-burst.webp"
              width={96}
              height={108}
              loading="lazy"
              alt="Yelp logo in white"
            />
          </a>
        </div>
      </div>
      <footer className="text-center text-[#ff0000ce] text-xs md:text-sm">
        Designed by Meagan Rafferty. Developed by Nader Motamedi.
      </footer>
    </div>
  );
}
