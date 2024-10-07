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
      description:
        "A refined classic. French Vanilla and Vanilla Beanall in one!",
      isGF: true,
    },
    {
      title: "Double Dark Chocolate",
      description: "Pure Dutch processed dark chocolate churned to perfection.",
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
        "Ready to eat scratch-made chunks of chocolate chip cookie dough in a sweet cream base.",
    },
    {
      title: "Banana Chocolate Chip",
      description:
        "A personal favorite. Perfectly ripened bananas turned into creamy goodness with a chocolate chip crunch.",
      isGF: true,
    },
    {
      title: "Chocolate Caramel Cone Crunch",
      description:
        "Sweet cream ice cream with delicate chocolate covered waffle cone pieces and house-made caramel.",
    },
    {
      title: "S'mores",
      description:
        "Dark chocolate based ice cream with a marshmallow swirl and chocolate-covered graham crackers.",
    },
    {
      title: "Pistachio Chip",
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
      title: "MnM Chip",
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
