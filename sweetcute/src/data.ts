export type Flavors = {
  title: string;
  description?: string;
  isGF?: boolean;
  isVegan?: boolean;
  isDairyFree?: boolean;
};

export const flavors: { foreverFlavors: Flavors[]; sidePieces: Flavors[] } = {
  foreverFlavors: [
    {
      title: "Sweet Cream Vanilla",
      description: "A refined classic.",
      isGF: true,
    },
    {
      title: "Double Dark Chocolate",
      description:
        "Pure Dutch process dark chocolate churned to perfection with a swirl of crunchy chocolate throughout.",
      isGF: true,
    },
    {
      title: "Hazelnut Chocolate Crunch",
      description:
        "Toasted Hazelnuts woven into our classic creamy base complimented by a chocolate crunch!",
      isGF: true,
    },
    {
      title: "Cookie Dough",
      description:
        "Ready to eat scratch-made chunks of chocolate chip cookie dough in a sweet cream base with swirls of rich fudge.",
    },
    {
      title: "Banana Chocolate Chip",
      description:
        "A personal favorite. Perfectly ripened bananas turned into creamy goodness with a chocolate chip crunch.",
      isGF: true,
    },
    {
      title: "Chocolate Caramel Waffle Cone",
      description:
        "Sweet cream ice cream with delicate chocolate covered waffle cone pieces and house-made caramel.",
    },
    {
      title: "S'mores",
      description:
        "Graham-cracker infused dark chocolate ice cream with a marshmallow swirl and chocolate-covered graham crackers.",
    },
    {
      title: "Pistachio Chocolate Chip",
      description:
        "Everything is better with chocolate. Even pistachio. Toasted pistachio based ice cream with a crunchy chocolate swirl.",
      isGF: true,
    },
    {
      title: "Birthday Cake",
      description:
        "Cake batter based ice cream with fresh yellow cake pieces and sprinkles!",
    },
    {
      title: "M&M McFlurry",
      description: "A “flurry” of MnMs swirled into our sweet cream base.",
      isGF: true,
    },
    {
      title: "Strawberry Chocolate Chip",
      description:
        "Locally sourced farm fresh strawberries with a crunchy chocolate swirl.",
      isGF: true,
    },
    {
      title: "Peanut Butter Salted Ganache",
      description:
        "House-made peanut butter churned into our classic base with chunks of salty chocolate ganache.",
      isGF: true,
    },
    {
      title: "Vegan Coconut Chip",
      description:
        "Our coconut cream-based vegan ice cream with a crunchy chocolate swirl.",
      isGF: true,
      isVegan: true,
    },
    {
      title: "Strawberry Lemonade Sorbet",
      description:
        "First it’s sour, then it’s sweet! Farm fresh strawberries and tart lemon sorbet.",
      isGF: true,
      isVegan: true,
    },
    {
      title: "Caramel Brownie Sundae",
      description:
        "House made fudge brownies pieces in our sweet cream base with a crunchy caramel swirl!",
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
    { title: "COOKIES & CREAM" },
    { title: "BISCOFF COOKIE BUTTER" },
    { title: "MATZAH CHOCOLATE CRUNCH (for Passover)" },
    { title: "HALLOWEEN CANDY CRUNCH" },
  ],
};
