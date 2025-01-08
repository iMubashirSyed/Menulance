// <script lang="ts">

export interface pageType {
  meaning: string;
  description: string[];
  extraMessage: string;
}

export interface bodyType {
  page1: pageType;
  page2: pageType;
}

export interface arrType {
  heading: string;
  body: bodyType;
}

export const arr: arrType[] = [
  // Card 1
  {
    heading:
      "Fettuccine caseras con salsa de pato al vino tinto y especias aromáticas de la Toscana",
    body: {
      page1: {
        meaning: "Fettuccine caseras",
        description: [
          "Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.Menulance",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      page2: {
        meaning: "salsa de pato",
        description: [
          "salsa de pato that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  },
  // Card 2
  {
    heading:
      "Homemade fettuccine with duck dong urine in red wine and smelly spices from Tuscany",
    body: {
      page1: {
        meaning: "Homemade fettuccine",
        description: [
          "Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.Menulance",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      page2: {
        meaning: "duck dong",
        description: [
          "salsa de pato that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Salsa roja is a key component in Mexican cuisine, adding depth and heat to many dishes.",
      },
    },
  },
  // Card 3
  {
    heading:
      "Fettuccine caseras con salsa de pato al vino tinto y especias aromáticas de la Toscana",
    body: {
      page1: {
        meaning: "Fettuccine caseras",
        description: [
          "Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.Menulance",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      page2: {
        meaning: "salsa de pato",
        description: [
          "salsa de pato that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  },
  // Card 4
  {
    heading:
      "Homemade fettuccine with duck dong urine in red wine and smelly spices from Tuscany",
    body: {
      page1: {
        meaning: "Homemade fettuccine",
        description: [
          "Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.Menulance",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      page2: {
        meaning: "duck dong",
        description: [
          "salsa de pato that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Salsa roja is a key component in Mexican cuisine, adding depth and heat to many dishes.",
      },
    },
  }, // Card 5
  {
    heading:
      "Fettuccine caseras con salsa de pato al vino tinto y especias aromáticas de la Toscana",
    body: {
      page1: {
        meaning: "Fettuccine caseras",
        description: [
          "Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.Menulance",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      page2: {
        meaning: "salsa de pato",
        description: [
          "salsa de pato that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  },
  // Card 6
  {
    heading:
      "Homemade fettuccine with duck dong urine in red wine and smelly spices from Tuscany",
    body: {
      page1: {
        meaning: "Homemade fettuccine",
        description: [
          "Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.Menulance",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      page2: {
        meaning: "duck dong",
        description: [
          "salsa de pato that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Salsa roja is a key component in Mexican cuisine, adding depth and heat to many dishes.",
      },
    },
  },
  // Card 7
  {
    heading:
      "Homemade fettuccine with duck dong urine in red wine and smelly spices from Tuscany",
    body: {
      page1: {
        meaning: "Homemade fettuccine",
        description: [
          "Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.Menulance",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      page2: {
        meaning: "duck dong",
        description: [
          "salsa de pato that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
          "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes.Wiktionary",
          "This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
        extraMessage:
          "Salsa roja is a key component in Mexican cuisine, adding depth and heat to many dishes.",
      },
    },
  },
];

//   {
//     heading:2,
//     body:{
//       page1:{
//         meaning: "abc",
//         description: ["point1", "point2"],
//         extraMessage: "lorem"
//       },
//       page2:{
//         meaning: "abc",
//         description: ["point1", "point2"],
//         extraMessage: "lorem"
//       }
//     }
//   },
//   {
//     heading:3,
//     body:{
//       page1:{
//         meaning: "abc",
//         description: ["point1", "point2"],
//         extraMessage: "lorem"
//       },
//       page2:{
//         meaning: "abc",
//         description: ["point1", "point2"],
//         extraMessage: "lorem"
//       }
//     }
//   },

// arr.map((item, index) => {
//   console.log(item.heading, index);
// });
