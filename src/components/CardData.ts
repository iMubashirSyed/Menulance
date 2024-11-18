// <script lang="ts">

export interface pageType {
  meaning: string,
  description: string[],
  extraMessage: string
}

export interface bodyType {
  page1: pageType,
  page2: pageType,
}

export interface arrType {
  heading: string,
  body: bodyType
}

export const arr: arrType[] = [
  // Card 1
  {
    heading: "Fettuccine caseras con salsa de pato al vino tinto y especias aromáticas de la Toscana",
    body: {
      page1: {
        meaning: "Fettuccine caseras",
        description: ["Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
           "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes. This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lorem. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
        extraMessage: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      page2: {
        meaning: "salsa de pato",
        description: ["salsa de pato that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",
           "Artisanal Preparation: Fettuccine that is crafted by hand, often reflecting traditional methods and recipes. This type of fettuccine is usually made with a focus on quality and authenticity, distinguishing it from mass-produced pasta lo. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."],
        extraMessage: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    }
  },
  // Card 2
  {
    heading: "Homemade fettuccine with duck dong urine in red wine and smelly spices from Tuscany",
    body: {
      page1: {
        meaning: "Homemade fettuccine",
        description: ["Fettuccine that is made from scratch using ingredients like flour, eggs, and water, rather than store-bought or pre-packaged. It is rolled out and cut into flat, ribbon-like strips, often providing a richer and more personalized flavor and texture.",          
          "Marinated Pork: The pork is seasoned with a mix of spices and marinated for several hours, creating a savory and flavorful filling for the tacos."],
        extraMessage: "The blend of sweet and spicy from the pineapple and salsa makes these tacos a favorite in many regions of Mexico."
      },
      page2: {
        meaning: "duck dong",
        description: ["A fiery red sauce made from tomatoes, chilies, and spices, typically used to accompany tacos and other Mexican dishes.",
           "The salsa can range from mild to extremely hot depending on the type of chili used."],
        extraMessage: "Salsa roja is a key component in Mexican cuisine, adding depth and heat to many dishes."
      }
    }
  },
  // Card 3
  {
    heading: "Lasagna de berenjena con queso ricotta y tomate fresco",
    body: {
      page1: {
        meaning: "Lasagna de berenjena",
        description: ["A vegetarian twist on traditional lasagna, replacing pasta sheets with thin slices of eggplant.",
           "The eggplant layers are rich and flavorful, providing a unique and healthy alternative to pasta."],
        extraMessage: "This dish is a great option for those looking to enjoy lasagna without the carbs."
      },
      page2: {
        meaning: "Queso ricotta",
        description: ["A soft, creamy cheese often used in Italian dishes like lasagna or stuffed pasta.",
           "Ricotta has a mild flavor and a slightly grainy texture, making it perfect for layering in lasagna."],
        extraMessage: "Ricotta cheese adds richness and moisture to the lasagna, complementing the eggplant layers."
      }
    }
  },
  // Card 4
  {
    heading: "Pizza Margherita con mozzarella fresca y albahaca",
    body: {
      page1: {
        meaning: "Pizza Margherita",
        description: ["A classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, and basil.",
           "The combination of these ingredients represents the colors of the Italian flag, symbolizing the country's patriotism."],
        extraMessage: "This simple yet flavorful pizza is beloved by many and is a true staple of Italian cuisine."
      },
      page2: {
        meaning: "Mozzarella fresca",
        description: ["Fresh mozzarella is a soft cheese made from buffalo or cow's milk, known for its delicate texture and mild flavor.",
           "It is often used on pizza due to its ability to melt perfectly and create a creamy topping."],
        extraMessage: "Mozzarella fresca enhances the flavor of pizza and adds a smooth, creamy texture."
      }
    }
  },
  // Card 5
  {
    heading: "Sushi de atún con aguacate y arroz de vinagre",
    body: {
      page1: {
        meaning: "Sushi de atún",
        description: ["A type of sushi made with raw tuna, typically served with vinegared rice and often garnished with wasabi and soy sauce.",
           "The freshness of the tuna is key to making this sushi dish delicious."],
        extraMessage: "Sushi de atún is one of the most popular types of sushi, enjoyed worldwide."
      },
      page2: {
        meaning: "Arroz de vinagre",
        description: ["A Japanese rice dish flavored with rice vinegar, sugar, and salt, used as a base for sushi.",
           "The vinegary rice is slightly tangy and complements the raw fish perfectly."],
        extraMessage: "The vinegar rice is essential for creating authentic sushi."
      }
    }
  },
  // Card 6
  {
    heading: "Paella de mariscos con calamares y gambas",
    body: {
      page1: {
        meaning: "Paella de mariscos",
        description: ["A traditional Spanish dish made with rice, seafood, and vegetables, typically cooked in a single pan.",
           "The combination of seafood adds a rich flavor to the rice, making this dish unique."],
        extraMessage: "Paella is often cooked during special occasions in Spain, showcasing the country's love for seafood."
      },
      page2: {
        meaning: "Calamares y gambas",
        description: ["Calamares refers to squid, and gambas refers to shrimp. Both are commonly used in seafood dishes like paella.",
           "These ingredients contribute to the rich, savory taste of paella."],
        extraMessage: "Calamares and gambas add a tender texture and a burst of flavor to the paella."
      }
    }
  },
  // Card 7
  {
    heading: "Ceviche de camarón con lima y cilantro",
    body: {
      page1: {
        meaning: "Ceviche de camarón",
        description: ["A fresh seafood dish made with shrimp marinated in lime juice and mixed with vegetables like onions, tomatoes, and cilantro.",
           "The shrimp 'cook' in the acid of the lime juice, making it a tangy and refreshing dish."],
        extraMessage: "Ceviche is often enjoyed as a starter or appetizer, particularly in coastal regions."
      },
      page2: {
        meaning: "Lima y cilantro",
        description: ["Lime provides acidity to the ceviche, while cilantro adds a fresh, herbal flavor.",
           "The combination of lime and cilantro is what makes ceviche so refreshing and flavorful."],
        extraMessage: "These ingredients elevate the taste of ceviche, creating a balance between tangy and herby notes."
      }
    }
  }
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