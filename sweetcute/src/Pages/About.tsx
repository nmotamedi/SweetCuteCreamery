export function About() {
  return (
    <div className="bg-[#7FBEF0] flex flex-col justify-center items-center">
      <h2 className="font-FaroVariable text-white text-xl md:text-2xl mt-10 text-center">
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
      <div className="m-6 md:m-10">
        <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
          I spent most of my life hunting down the best ice cream shops and
          store-bought pints that CA has to offer, until one day I realized that
          if I loved it so much, I should be making it myself.
        </p>
        <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
          What started out as a hobby quickly turned into a daily passion - I
          was spending all my time at my office job dreaming up what flavors I'd
          make next. And thus Sweet Cute was born.
        </p>
        <p className="font-PoppinsBold text-white text-base md:text-2xl mb-4 md:mb-8">
          Each batch at Sweet Cute is scratch-made with love by an ice cream
          fanatic that knows what makes good ice cream and aspires to help the
          community find that perfect scoop they've always been searching for.
        </p>
      </div>
    </div>
  );
}
