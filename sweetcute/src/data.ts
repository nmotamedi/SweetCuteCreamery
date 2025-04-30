export type Flavors = {
  title: string;
  id: number;
  description?: string;
  respDescription?: string;
  img?: string;
  isGF?: boolean;
  isVegan?: boolean;
  isDairyFree?: boolean;
  isInSeason?: boolean;
};

export type QuizQuestions = {
  questionId: number;
  question: string;
  option1: string;
  option2: string;
}[];

export const flavors: { foreverFlavors: Flavors[]; sidePieces: Flavors[] } = {
  foreverFlavors: [
    {
      title: "Sweet Cream Vanilla",
      description: "A refined classic.",
      isGF: true,
      id: 1,
      img: "/flavor_imgs/Sweet Cream Vanilla.png",
    },
    {
      title: "Double Dark Chocolate",
      description:
        "Pure Dutch process dark chocolate churned to perfection with a swirl of crunchy chocolate throughout.",
      respDescription:
        "Like Double Dark Chocolate, you appreciate the finer things in life and know what you like! You are an elegant classic but let your opinions be heard! Like Dark Chocolate, you are reliable, sophisticated and meant for people with a refined taste. Grab a pint of our rich and daring Double Dark Chocolate today!",
      isGF: true,
      id: 2,
      img: "/flavor_imgs/Double Dark Choc.png",
    },
    {
      title: "Hazelnut Chocolate Crunch",
      description:
        "Toasted Hazelnuts woven into our classic creamy base complimented by a chocolate crunch!",
      respDescription:
        "Like Hazelnut Chocolate Crunch, you are quietly confident and bring depth and richness to those around you! Your strong yet grounded personality brings peace and comfort to those that you love and you will always serve as a shoulder to cry on. Though you are gentle and kind, if anyone wrongs you, you’ve got a little bit of “crunch” in you to stand up for yourself! Grab a pint of the bold Hazelnut Chocolate Crunch today!",
      isGF: true,
      id: 3,
      img: "/flavor_imgs/Hazelnut.png",
    },
    {
      title: "Cookie Dough",
      description:
        "Ready to eat scratch-made chunks of chocolate chip cookie dough in a sweet cream base with swirls of rich fudge.",
      respDescription:
        "Like Cookie Dough, you are strong, bold and trendy. You bring the energy in every situation, so much so that people always want to come back for more! You are not afraid to speak up for what you believe in and stand out! Grab a pint of the addictively chunky Cookie Dough today!",
      id: 4,
      img: "/flavor_imgs/Cookie Dough.png",
    },
    {
      title: "Banana Chocolate Chip",
      description:
        "A personal favorite. Perfectly ripened bananas turned into creamy goodness with a chocolate chip crunch.",
      respDescription:
        "You are comfort food to the max! You are someone that everyone gets along with everyone and is seen as the peacekeeper amongst your social groups. You are reliable, sweet, and grounded. Order a pint of the rich and creamy Banana Chocolate Chip today!",
      isGF: true,
      id: 5,
      img: "/flavor_imgs/Banana Choc Chip.png",
    },
    {
      title: "Chocolate Caramel Waffle Cone",
      description:
        "Sweet cream ice cream with delicate chocolate covered waffle cone pieces and house-made caramel.",
      id: 6,
      img: "/flavor_imgs/Caramel Waffle Cone.png",
    },
    {
      title: "S'mores",
      description:
        "Graham-cracker infused dark chocolate ice cream with a marshmallow swirl and chocolate-covered graham crackers.",
      img: "/flavor_imgs/Smores.png",
      respDescription:
        "Like S’mores you are full of child-like wonder and are sweet as can be. You are the friend that everyone counts on for a shoulder to cry on but you also know how to brighten up everyone’s day. You are sweet, compassionate, and you probably give great hugs! Grab a pint of nostalgic S’mores today!",
      id: 7,
    },
    {
      title: "Pistachio Chocolate Chip",
      description:
        "Everything is better with chocolate. Even pistachio. Toasted pistachio based ice cream with a crunchy chocolate swirl.",
      isGF: true,
      img: "/flavor_imgs/Pistachio Choc Chip.png",
      id: 8,
    },
    {
      title: "Birthday Cake",
      description:
        "Cake batter based ice cream with fresh yellow cake pieces and sprinkles!",
      respDescription:
        "Like Birthday Cake, you aren’t afraid to let your personality shine! You are sweet and friendly, but also know how to party! You are full of flavor and full of surprises, keeping everyone in your life guessing what spontaneous fun you’ll bring to their lives next! Grab a pint of the party-starting Birthday Cake today!",
      id: 9,
      img: "/flavor_imgs/Birthday Cake.png",
    },
    {
      title: "M&M Flurry",
      description: "A “flurry” of M&Ms swirled into our sweet cream base.",
      isGF: true,
      id: 10,
      img: "/flavor_imgs/M&M Flurry.png",
    },
    {
      title: "Strawberry Chocolate Chip",
      description:
        "Fresh Strawberries infused into our creamy base with a crunchy chocolate swirl.",
      respDescription:
        "You are fun, flirty and thriving! Like Strawberry Chocolate Chip, you bring the party with you everywhere you go. You are classic and reliable with a passionate heart that brings a little sweetness into everyone’s life! Grab a pint of the adorably refreshing Strawberry Chocolate Chip today!",
      isGF: true,
      img: "/flavor_imgs/Strawberry Choc Chip.png",
      id: 11,
    },
    {
      title: "Peanut Butter Salted Ganache",
      description:
        "House made peanut butter ice cream with chunks of salty chocolate ganache and crunchy peanut brittle.",
      respDescription:
        "Like Peanut Butter Salted Ganache, are you uniquely you and with you, what you see is what you get! You are down to earth, well-rounded and stand up for what you believe in. You are funky, rebellious and like to take the road less traveled! Grab a pint of wonderfully funky Peanut Butter Salted Ganache today!",
      isGF: true,
      id: 12,
      img: "/flavor_imgs/PB Salted Ganache.png",
    },
    {
      title: "Vegan Coconut Chip",
      description:
        "Our coconut cream-based vegan ice cream with a crunchy chocolate swirl.",
      isGF: true,
      isVegan: true,
      id: 13,
      img: "/flavor_imgs/coconut_chip.png",
    },

    {
      title: "Caramel Brownie Sundae",
      description:
        "House made fudge brownies pieces in our sweet cream base with a crunchy caramel swirl!",
      id: 15,
      img: "/flavor_imgs/Caramel Brownie Sundae.png",
    },
    {
      title: "Kiwi Pomegranate Sorbet",
      isGF: true,
      isDairyFree: true,
      img: "/flavor_imgs/Pom Kiwi Sorb.png",
      description:
        "A unique combo of freshly juiced pomegranate seeds and mouth watering kiwi for a refreshing sorbet perfect for any season.",
      id: 19,
    },
  ],
  sidePieces: [
    {
      title: "Mint Cookies & Cream",
      id: 16,
      isInSeason: false,
    },
    {
      title: "Strawberry Lemonade Sorbet",
      description:
        "First it’s sour, then it’s sweet! Farm fresh strawberries and tart lemon sorbet.",
      isGF: true,
      isVegan: true,
      isInSeason: false,
      id: 14,
    },
    {
      title: "Avocado Chocolate Chip",
      isGF: true,
      id: 17,
      isInSeason: false,
    },
    {
      title: "Peaches & Cream",
      isGF: true,
      id: 18,
      isInSeason: false,
    },

    {
      title: "Cherry Chocolate Chunk",
      isGF: true,
      id: 20,
      isInSeason: false,
    },

    {
      title: "Vegan Banana Pudding",
      isGF: false,
      id: 21,
      isInSeason: true,
    },

    {
      title: "Espresso Chocolate Chip",
      isGF: true,
      id: 22,
      isInSeason: false,
    },
    { title: "Cookies & Cream", id: 23, isInSeason: false },
    { title: "Speculoos Cookie Butter", id: 24, isInSeason: false },
    {
      title: "Matzah Toffee Bark (for Passover)",
      id: 25,
      isInSeason: false,
    },
    { title: "Halloween Candy Crunch", id: 26, isInSeason: false },
  ],
};

export const quizQuestions: QuizQuestions = [
  {
    questionId: 1,
    question: "Are you introverted or extroverted?",
    option1: "extroverted",
    option2: "introverted",
  },
  {
    questionId: 2,
    question: "Are you more of an optimist or a pessimist?",
    option1: "optimist",
    option2: "pessimist",
  },
  {
    questionId: 3,
    question:
      "Do you go for the finer things in life or do you stick to the classics?",
    option1: "i’m bougie!",
    option2: "i like my classic comforts!",
  },
  {
    questionId: 4,
    question: "Are you more rebellious or do you like to follow the trends?",
    option1: "i’m a rebel!",
    option2: "i’m more comfortable letting others take the lead!",
  },
  {
    questionId: 5,
    question:
      "Do you prefer fun nights out or deep conversations with friends?",
    option1: "i’m a party animal!",
    option2: "i prefer to stay in and connect!",
  },
  {
    questionId: 6,
    question: "Are you more passionate or level headed?",
    option1: "passionate",
    option2: "level-headed",
  },
  {
    questionId: 7,
    question: "Are you more opinionated or like to keep the peace?",
    option1: "i make my voice heard!",
    option2: "i’m a peacekeeper",
  },
  {
    questionId: 8,
    question: "Sweet or salty?",
    option1: "sweet",
    option2: "salty",
  },
];

export const quizResponses = [
  {
    flavorId: 2,
    responses: ["b", "b", "a", "b", "b", "b", "a", "a"],
  },
  {
    flavorId: 11,
    responses: ["a", "a", "b", "b", "a", "a", "b", "a"],
  },
  {
    flavorId: 3,
    responses: ["b", "b", "a", "a", "b", "a", "b", "b"],
  },
  {
    flavorId: 4,
    responses: ["a", "b", "a", "a", "a", "a", "a", "a"],
  },
  {
    flavorId: 12,
    responses: ["b", "a", "a", "b", "a", "b", "a", "b"],
  },
  {
    flavorId: 7,
    responses: ["a", "a", "b", "b", "b", "b", "b", "a"],
  },
  {
    flavorId: 9,
    responses: ["a", "a", "b", "a", "a", "a", "a", "a"],
  },
  {
    flavorId: 5,
    responses: ["b", "b", "b", "b", "b", "b", "b", "b"],
  },
];
