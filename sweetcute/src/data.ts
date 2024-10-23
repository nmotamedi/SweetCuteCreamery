export type Flavors = {
  title: string;
  id: number;
  description?: string;
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
      isGF: true,
      id: 2,
    },
    {
      title: "Hazelnut Chocolate Crunch",
      description:
        "Toasted Hazelnuts woven into our classic creamy base complimented by a chocolate crunch!",
      isGF: true,
      id: 3,
    },
    {
      title: "Cookie Dough",
      description:
        "Ready to eat scratch-made chunks of chocolate chip cookie dough in a sweet cream base with swirls of rich fudge.",
      id: 4,
    },
    {
      title: "Banana Chocolate Chip",
      description:
        "A personal favorite. Perfectly ripened bananas turned into creamy goodness with a chocolate chip crunch.",
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
      isGF: true,
      id: 11,
    },
    {
      title: "Peanut Butter Salted Ganache",
      description:
        "House-made peanut butter churned into our classic base with chunks of salty chocolate ganache.",
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
    option1: "extrovert",
    option2: "introvert",
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
      "Do you go for the finer things in life? Or do you stick to the classics?",
    option1: "i’m bougie!",
    option2: "i like my classic comforts!",
  },
  {
    questionId: 4,
    question: "Are you more rebellious? Or do you like to follow the trends?",
    option1: "i’m a rebel!",
    option2: "i’m more comfortable letting others take the lead!",
  },
  {
    questionId: 5,
    question:
      "do you prefer fun nights out? Or deep conversations with friends?",
    option1: "i’m a party animal!",
    option2: "i prefer to stay in and connect!",
  },
  {
    questionId: 6,
    question: "Are you more passionate? or level headed?",
    option1: "passionate",
    option2: "level-headed",
  },
  {
    questionId: 7,
    question: "Are you more opinionated? or like to keep the peace?",
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
    flavorId: 22,
    responses: ["a", "b", "a", "a", "a", "a", "a", "a"],
  },
  {
    flavorId: 17,
    responses: ["b", "a", "a", "b", "a", "b", "a", "b"],
  },
  {
    flavorId: 7,
    responses: ["a", "a", "b", "b", "b", "b", "b", "a"],
  },
  {
    flavorId: 16,
    responses: ["a", "a", "b", "a", "a", "a", "a", "a"],
  },
  {
    flavorId: 5,
    responses: ["b", "b", "b", "b", "b", "b", "b", "b"],
  },
];
