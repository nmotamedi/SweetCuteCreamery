type Flavors = {
  title: string;
  isGF?: boolean;
  isVegan?: boolean;
  isDairyFree?: boolean;
};

export const flavors: { foreverFlavors: Flavors[]; sidePieces: Flavors[] } = {
  foreverFlavors: [
    {
      title: "SWEET CREAM VANILLA",
      isGF: true,
    },
    { title: "DOUBLE DARK CHOCOLATE", isGF: true },
    {
      title: "HAZELNUT CHOCOLATE CRUNCH",
      isGF: true,
    },
    {
      title: "COOKIE DOUGH",
    },
    {
      title: "BANANA CHOCOLATE CHIP",
      isGF: true,
    },
    {
      title: "CHOCOLATE CARAMEL CONE CRUNCH",
    },
    {
      title: "S'MORES",
    },
    {
      title: "PISTACHIO CHIP",
      isGF: true,
    },
    {
      title: "BIRTHDAY CAKE",
    },
    {
      title: "MnM CHIP",
      isGF: true,
    },
    {
      title: "STRAWBERRY CHOCOLATE CHIP",
      isGF: true,
    },
    {
      title: "PEANUT BUTTER SALTED GANACHE",
      isGF: true,
    },
    {
      title: "VEGAN COCONUT CHIP",
      isGF: true,
      isVegan: true,
    },
    {
      title: "STRAWBERRY LEMONADE SORBET",
      isGF: true,
      isVegan: true,
    },
  ],
  sidePieces: [
    {
      title: "MINT FUDGE BROWNIE",
    },

    {
      title: "AVOCADO CHOCOLATE CHIP",
      isGF: true,
    },
    {
      title: "PEACHES & CREAM",
      isGF: true,
    },

    {
      title: "KIWI POMEGRANATE SORBET",
      isGF: true,
      isDairyFree: true,
    },

    {
      title: "CHERRY CHOCOLATE GANACHE",
      isGF: true,
    },

    {
      title: "DARK CHOCOLATE PEANUT BRITTLE",
      isGF: true,
    },

    {
      title: "ESPRESSO CHOCOLATE CHIP",
      isGF: true,
    },
    { title: "BROWNIE SUNDAE" },
    { title: "COOKIES & CREAM" },
    { title: "BISCOFF COOKIE BUTTER" },
    { title: "MATZAH CHOCOLATE CRUNCH (for Passover)" },
    { title: "HALLOWEEN CANDY CRUNCH" },
  ],
};
