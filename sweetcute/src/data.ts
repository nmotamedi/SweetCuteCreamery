export type Flavors = {
  title: string;
  id: number;
  description?: string;
  respDescription?: string;
  isGF?: boolean;
  isVegan?: boolean;
  isDairyFree?: boolean;
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
    },
    {
      title: "Double Dark Chocolate",
      description:
        "Pure Dutch process dark chocolate churned to perfection with a swirl of crunchy chocolate throughout.",
      respDescription:
        "Like Double Dark Chocolate, you appreciate the finer things in life and know what you like! You are an elegant classic but let your opinions be heard! Like Dark Chocolate, you are reliable, sophisticated and meant for people with a refined taste. Grab a pint of our rich and daring Double Dark Chocolate today!",
      isGF: true,
      id: 2,
    },
    {
      title: "Hazelnut Chocolate Crunch",
      description:
        "Toasted Hazelnuts woven into our classic creamy base complimented by a chocolate crunch!",
      respDescription:
        "Like Hazelnut Chocolate Crunch, you are quietly confident and bring depth and richness to those around you! Your strong yet grounded personality brings peace and comfort to those that you love and you will always serve as a shoulder to cry on. Though you are gentle and kind, if anyone wrongs you, you’ve got a little bit of “crunch” in you to stand up for yourself! Grab a pint of the bold Hazelnut Chocolate Crunch today!",
      isGF: true,
      id: 3,
    },
    {
      title: "Cookie Dough",
      description:
        "Ready to eat scratch-made chunks of chocolate chip cookie dough in a sweet cream base with swirls of rich fudge.",
      respDescription:
        "Like Cookie Dough, you are strong, bold and trendy. You bring the energy in every situation, so much so that people always want to come back for more! You are not afraid to speak up for what you believe in and stand out! Grab a pint of the addictively chunky Cookie Dough today!",
      id: 4,
    },
    {
      title: "Banana Chocolate Chip",
      description:
        "A personal favorite. Perfectly ripened bananas turned into creamy goodness with a chocolate chip crunch.",
      respDescription:
        "You are comfort food to the max! You are someone that everyone gets along with everyone and is seen as the peacekeeper amongst your social groups. You are reliable, sweet, and grounded. Order a pint of the rich and creamy Banana Chocolate Chip today!",
      isGF: true,
      id: 5,
    },
    {
      title: "Chocolate Caramel Waffle Cone",
      description:
        "Sweet cream ice cream with delicate chocolate covered waffle cone pieces and house-made caramel.",
      id: 6,
    },
    {
      title: "S'mores",
      description:
        "Graham-cracker infused dark chocolate ice cream with a marshmallow swirl and chocolate-covered graham crackers.",
      respDescription:
        "Like S’mores you are full of child-like wonder and are sweet as can be. You are the friend that everyone counts on for a shoulder to cry on but you also know how to brighten up everyone’s day. You are sweet, compassionate, and you probably give great hugs! Grab a pint of nostalgic S’mores today!",
      id: 7,
    },
    {
      title: "Pistachio Chocolate Chip",
      description:
        "Everything is better with chocolate. Even pistachio. Toasted pistachio based ice cream with a crunchy chocolate swirl.",
      isGF: true,
      id: 8,
    },
    {
      title: "Birthday Cake",
      description:
        "Cake batter based ice cream with fresh yellow cake pieces and sprinkles!",
      respDescription:
        "Like Birthday Cake, you aren’t afraid to let your personality shine! You are sweet and friendly, but also know how to party! You are full of flavor and full of surprises, keeping everyone in your life guessing what spontaneous fun you’ll bring to their lives next! Grab a pint of the party-starting Birthday Cake today!",
      id: 9,
    },
    {
      title: "M&M Flurry",
      description: "A “flurry” of M&Ms swirled into our sweet cream base.",
      isGF: true,
      id: 10,
    },
    {
      title: "Strawberry Chocolate Chip",
      description:
        "Locally sourced farm fresh strawberries with a crunchy chocolate swirl.",
      respDescription:
        "You are fun, flirty and thriving! Like Strawberry Chocolate Chip, you bring the party with you everywhere you go. You are classic and reliable with a passionate heart that brings a little sweetness into everyone’s life! Grab a pint of the adorably refreshing Strawberry Chocolate Chip today!",
      isGF: true,
      id: 11,
    },
    {
      title: "Peanut Butter Salted Ganache",
      description:
        "House-made peanut butter churned into our classic base with chunks of salty chocolate ganache.",
      respDescription:
        "Like Peanut Butter Salted Ganache, are you uniquely you and with you, what you see is what you get! You are down to earth, well-rounded and stand up for what you believe in. You are funky, rebellious and like to take the road less traveled! Grab a pint of wonderfully funky Peanut Butter Salted Ganache today!",
      isGF: true,
      id: 12,
    },
    {
      title: "Vegan Coconut Chip",
      description:
        "Our coconut cream-based vegan ice cream with a crunchy chocolate swirl.",
      isGF: true,
      isVegan: true,
      id: 13,
    },
    {
      title: "Strawberry Lemonade Sorbet",
      description:
        "First it’s sour, then it’s sweet! Farm fresh strawberries and tart lemon sorbet.",
      isGF: true,
      isVegan: true,
      id: 14,
    },
    {
      title: "Caramel Brownie Sundae",
      description:
        "House made fudge brownies pieces in our sweet cream base with a crunchy caramel swirl!",
      id: 15,
    },
  ],
  sidePieces: [
    {
      title: "MINT FUDGE BROWNIE",
      id: 16,
    },

    {
      title: "AVOCADO CHOCOLATE CHIP",
      isGF: true,
      id: 17,
    },
    {
      title: "PEACHES & CREAM",
      isGF: true,
      id: 18,
    },

    {
      title: "KIWI POMEGRANATE SORBET",
      isGF: true,
      isDairyFree: true,
      id: 19,
    },

    {
      title: "CHERRY CHOCOLATE GANACHE",
      isGF: true,
      id: 20,
    },

    {
      title: "DARK CHOCOLATE PEANUT BRITTLE",
      isGF: true,
      id: 21,
    },

    {
      title: "ESPRESSO CHOCOLATE CHIP",
      isGF: true,
      id: 22,
    },
    { title: "COOKIES & CREAM", id: 23 },
    { title: "SPECULOOS COOKIE BUTTER", id: 24 },
    { title: "MATZAH CHOCOLATE CRUNCH (for Passover)", id: 25 },
    { title: "HALLOWEEN CANDY CRUNCH", id: 26 },
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
