import { Helmet } from 'react-helmet';

export function About() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.sweetcuteicecream.com/about" />
      </Helmet>
      <div className="bg-[#7FBEF0] flex-col justify-center items-center hidden sm:flex">
        <div className="w-full flex items-center m-10">
          <div className="basis-1/2 flex justify-center">
            <div className="w-3/4 rounded-xl">
              <img
                className="w-full rounded-xl"
                alt="Photo of Sarah"
                src="/images/sarah_about.jpeg"
              />
            </div>
          </div>
          <div className="basis-1/2">
            <h2 className="font-FaroVariable text-white text-xl md:text-2xl text-center -mb-5">
              HI
              <br />
              IM SARAH
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="m-auto">
              <path id="curve" d="M50 100 Q150 55 250 100" fill="transparent" />
              <text
                fill="#FEE38C"
                fontSize="36"
                fontFamily="FaroVariableDisplay"
              >
                <textPath href="#curve" startOffset="50%" textAnchor="middle">
                  ICE CREAM
                </textPath>
              </text>
            </svg>
            <h2 className="font-FaroVariable text-[#FEE38C] text-xl md:text-4xl -mt-8 mb-10 text-center">
              IS MY
              <br />
              ENTIRE PERSONALITY
            </h2>
            <div className="m-6 md:m-10 text-center">
              <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
                I spent most of my life hunting down the best ice cream shops
                and store-bought pints that CA has to offer, until one day I
                realized that if I loved it so much, I should be making it
                myself.
              </p>
              <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
                What started out as a hobby quickly turned into a daily passion
                - I was spending all my time dreaming up what flavors I'd make
                next. And thus Sweet Cute was born.
              </p>
              <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
                Each batch at Sweet Cute is scratch-made with love by an ice
                cream fanatic that knows what makes good ice cream and aspires
                to help the community find that perfect scoop they've always
                been searching for.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7FBEF0] flex-col justify-center items-center flex sm:hidden">
        <h2 className="font-FaroVariable text-white text-xl md:text-2xl text-center mt-5 -mb-5">
          HI
          <br />
          IM SARAH
        </h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto">
          <path id="curve" d="M50 100 Q150 55 250 100" fill="transparent" />
          <text fill="#FEE38C" fontSize="36" fontFamily="FaroVariableDisplay">
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              ICE CREAM
            </textPath>
          </text>
        </svg>
        <h2 className="font-FaroVariable text-[#FEE38C] text-xl md:text-4xl -mt-8 mb-10 text-center">
          IS MY
          <br />
          ENTIRE PERSONALITY
        </h2>
        <div className="w-1/2 rounded-xl">
          <img
            className="w-full rounded-xl"
            alt="Photo of Sarah"
            src="/images/sarah_about.jpeg"
          />
        </div>

        <div className="m-6 md:m-10 text-center">
          <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
            I spent most of my life hunting down the best ice cream shops and
            store-bought pints that CA has to offer, until one day I realized
            that if I loved it so much, I should be making it myself.
          </p>
          <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
            What started out as a hobby quickly turned into a daily passion - I
            was spending all my time dreaming up what flavors I'd make next. And
            thus Sweet Cute was born.
          </p>
          <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
            Each batch at Sweet Cute is scratch-made with love by an ice cream
            fanatic that knows what makes good ice cream and aspires to help the
            community find that perfect scoop they've always been searching for.
          </p>
        </div>
      </div>
    </>
  );
}
