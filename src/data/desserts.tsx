import placeholder from "../images/placeholder.webp";
import gluten_free from "../images/icons/gluten_free.svg";
import recommended from "../images/icons/recommended.svg";
import refined_sugar_free from "../images/icons/refined_sugar_free.svg";
import vegan from "../images/icons/vegan.svg";
import pistachio_hazelnut_creme from "../images/items/pistachio_hazelnut_creme.webp";
import roasted_coffee_and_chocolate_mousse from "../images/items/roasted_coffee_&_chocolate_mousse.webp";
import rose_pistachio_eclair from "../images/items/rose_pistachio_eclair.webp";
// import galaxie_gooye_raspberry_cake from "../images/items/galaxie_gooye_raspberry_cake.webp"
// import hazelnut_creme from  "../images/items/hazelnut_creme.webp"
import mango_achia_pudding from "../images/items/mango_achia_pudding.webp";
import tiramisu from "../images/items/tiramisu.webp";
import pistachio_raspberry_mousse from "../images/items/pistachio_raspberry_mousse.webp";
import pecan from "../images/items/pecan.webp";
import creme_brulee from "../images/items/creme_brulee.webp";
import galaxie_gooye_raspberry_cake from "../images/items/galaxie_gooye_raspberry_cake.webp";
import orange_bask from "../images/items/orange_bask.webp";
import vegan_lemon from "../images/items/vegan_lemon.webp";
import pistachio_hazelnut from "../images/items/pistachio_hazelnut.webp";

export const desserts = [
  {
    parentCatName: "حلويات السعادة",
    parentCatCollection: [
      {
        categoryName: "كعك الشاي",
        items: [
          {
            itemName: "كيك الشاي بالتمر والتوفي",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "كيك الشاي بجوز البيكان والجزر ",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
          {
            itemName: "كيك بجوز البيكان والموز ",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "لوز بالقرفة",
            price: "30",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "الفطائر",
        items: [
          {
            itemName: "الفستق والبندق",
            price: "40",
            description: "",
            image: pistachio_hazelnut,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "كريم البندق",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "البندق ",
            price: "40",
            description: "",
            image: pecan,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "كريم الفستق ",
            price: "40",
            description: "",
            image: pistachio_hazelnut_creme,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "تشيز كيك",
        items: [
          {
            itemName: "كريم بروليه ",
            price: "35",
            description: "",
            image: creme_brulee,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "أورانج باسك ",
            price: "35",
            description: "",
            image: orange_bask,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "ليمون نباتي ",
            price: "35",
            description: "",
            image: vegan_lemon,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
        ],
      },
      {
        categoryName: "كيك جالور",
        items: [
          {
            itemName: "كيك الشوكولاته الداكنة النباتية ",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
          {
            itemName: "كيك الشوكولا الداكنة مع الفراولة ",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "كيك الشوكولا الداكنة مع التوت البري ",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "Fresh Fruits Crème",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "Chocolate Almond Praline",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "Toffee & Pecan cake with milk chocolate Ganache ",
            price: "40",
            description: "",
            image: placeholder,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
        ],
      },
      {
        categoryName: `الحلويات المفضلة لدى الشيف`,
        items: [
          {
            itemName: "إكلير بالبيستاشيو أند روز",
            price: "35",
            description: "",
            image: rose_pistachio_eclair,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "تيراميسيو",
            price: "35",
            description: "",
            image: tiramisu,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "كيك التوت البري جالاكسي جوي ",
            price: "40",
            description: "",
            image: galaxie_gooye_raspberry_cake,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "موس بالتوت البري والبيساتشيو",
            price: "40",
            description: "",
            image: pistachio_raspberry_mousse,
            allergies: [
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "موس بالقهوة المحمصة والشوكلاتة",
            price: "40",
            description: "",
            image: roasted_coffee_and_chocolate_mousse,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "بودينغ الشيا مع المانجا",
            price: "40",
            description: "",
            image: mango_achia_pudding,
            allergies: [
              { allergyName: "Chef's Recommendation", allergySrc: recommended },
              { allergyName: "Gluten Free", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
        ],
      },
    ],
  },
];
