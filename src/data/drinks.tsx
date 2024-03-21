import placeholder from "../images/placeholder.webp";
import gluten_free from "../images/icons/gluten_free.svg";
import refined_sugar_free from "../images/icons/refined_sugar_free.svg";
import vegan from "../images/icons/vegan.svg";
import fresh_juices_orange from "../images/items/fresh_juices_orange.webp";
// import hot_chocolate from "../images/items/hot_chocolate.webp";
// import iced_blue_latte from "../images/items/iced_blue_latte.webp";
import iced_strawberry_matcha_latte from "../images/items/iced_strawberry_matcha_latte.webp";
// import macchiato from "../images/items/macchiato.webp";
// import matcha_latte from "../images/items/matcha_latte.webp";
// import mocha from "../images/items/mocha.webp";
import precious_oud_tea from "../images/items/precious_oud_tea.webp";
// import turmeric_latte from "../images/items/turmeric_latte.webp";
// import cinderella from "../images/items/cinderella.webp";
import citrus from "../images/items/citrus.webp";
// import cortado from "../images/items/cortado.webp";
// import orange_hibiscus from "../images/items/orange_hibiscus.webp";
// import power_green from "../images/items/power_green.webp";

// import add_me_protien from "../images/items/add_me_protien.webp";
import arabian_night from "../images/items/arabian_night.webp";
import cafe_latte from "../images/items/cafe_latte.webp";
import cappuccino from "../images/items/cappuccino.webp";
import charcoal_latte from "../images/items/charcoal_latte.webp";
import cinderella from "../images/items/cinderella.webp";
import cortado from "../images/items/cortado.webp";
import date_and_caramel_frappe from "../images/items/date_and_caramel_frappe.webp";
import english_breakfast from "../images/items/english_breakfast.webp";
import espresso from "../images/items/espresso.webp";
// import espresso_double from "../images/items/espresso_double.webp";
import flat_white from "../images/items/flat_white.webp";
import green_jasmine from "../images/items/green_jasmine.webp";
import hot_chocolate from "../images/items/hot_chocolate.webp";
import iced_americano from "../images/items/iced_americano.webp";
import iced_blue_latte from "../images/items/iced_blue_latte.webp";
import iced_cappuccino from "../images/items/iced_cappuccino.webp";
// import iced_charcoal_latte from "../images/items/iced_charcoal_latte.webp";
import iced_cortado from "../images/items/iced_cortado.webp";
// import iced_matcha_latte from "../images/items/iced_matcha_latte.webp";
import iced_mocha from "../images/items/iced_mocha.webp";
// import iced_strawberry_latte from "../images/items/iced_strawberry_latte.webp";
import macchiato from "../images/items/macchiato.webp";
import matcha_latte from "../images/items/matcha_latte.webp";
import mocha from "../images/items/mocha.webp";
import orange_hibiscus from "../images/items/orange_hibiscus.webp";
import piccolo from "../images/items/piccolo.webp";
import turmeric_green from "../images/items/turmeric_green.webp";
import turmeric_latte from "../images/items/turmeric_latte.webp";
import power_green from "../images/items/power_green.webp";

export const drinks = [

  {
    parentCatName: "المشروبات",
    parentCatCollection: [
      {
        categoryName: " عصائر الديتوكس",
        items: [
          {
            itemName: "Fresh Juices",
            price: "30",
            description: "Orange, Carrot, Pineapple, Watermelon",
            image: fresh_juices_orange,
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
            itemName: "بوستر",
            price: "35",
            description:
              "Pure Blend of fresh carrots, red apples, oranges and of course no water!",
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
            itemName: "سايترس",
            price: "35",
            description:
              "Blend of fresh pineapples, carrots, oranges, green apples and of course no water!",
            image: citrus,
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
            itemName: "باور جرين ",
            price: "35",
            description:
              "Fresh baby spinach, green apples, lime, coconut water, ginger, kale, cucmber and of course no water",
            image: power_green,
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
            itemName: "شمندر",
            price: "35",
            description: "Classic beetroot blended with fresh gingers",
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
        ],
      },

      {
        categoryName: "القهوة المثلجة",
        items: [
          {
            itemName: "كورتادو مثلج ",
            price: "20",
            description: "",
            image: iced_cortado,
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
            itemName: "أمريكانو مثلج ",
            price: "20",
            description: "",
            image: iced_americano,
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
            itemName: "كابتشينو مثلج ",
            price: "25",
            description: "",
            image: iced_cappuccino,
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
            itemName: "لاتيه مثلج ",
            price: "25",
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
            itemName: "بلو لاتيه مثلج ",
            price: "25",
            description: "",
            image: iced_blue_latte,
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
            itemName: "كركدية بالبرتقال ",
            price: "25",
            description: "",
            image: orange_hibiscus,
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
            itemName: "سبانش لاتيه مثلج ",
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
            itemName: "موكا مثلج ",
            price: "30",
            description: "",
            image: iced_mocha,
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
            itemName: "قهوة جوز الهند المثلجة ",
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
            itemName: "ستروبيري ماتشا لاتيه مثلج ",
            price: "30",
            description: "",
            image: iced_strawberry_matcha_latte,
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
            itemName: "سندريلا ",
            price: "30",
            description: "",
            image: cinderella,
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
            itemName: "فرابتشينو بالتمر والكراميل ",
            price: "35",
            description: "",
            image: date_and_caramel_frappe,
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
        categoryName: "القهوة العضوية",
        items: [
          {
            itemName: "بيكولو ",
            price: "20",
            description: "",
            image: piccolo,
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
            itemName: "ماكياتو ",
            price: "20",
            description: "",
            image: macchiato,
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
            itemName: "إيسبريسو",
            price: "20",
            description: "",
            image: espresso,
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
            itemName: " كافية لاتيه ",
            price: "20",
            description: "",
            image: cafe_latte,
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
            itemName: "أمريكانو",
            price: "20",
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
            itemName: "كورتادو ",
            price: "25",
            description: "",
            image: cortado,
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
            itemName: "لاتيه بالكركم ",
            price: "25",
            description: "",
            image: turmeric_latte,
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
            itemName: "فلات وايت ",
            price: "25",
            description: "",
            image: flat_white,
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
            itemName: "ماتشا  لاتيه",
            price: "25",
            description: "",
            image: matcha_latte,
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
            itemName: "موكا",
            price: "25",
            description: "",
            image: mocha,
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
            itemName: " هوت شوكليت ",
            price: "25",
            description: "",
            image: hot_chocolate,
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
            itemName: " كابتشينو",
            price: "25",
            description: "",
            image: cappuccino,
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
            itemName: "لاتيه على الفحم ",
            price: "30",
            description: "",
            image: charcoal_latte,
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
        categoryName: "شاي الأعشاب",
        items: [
          {
            itemName: "إيرل جراي ",
            price: "20",
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
            itemName: "كرك أعشاب",
            price: "20",
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
            itemName: "شاي العود المعتق ",
            price: "20",
            description: "",
            image: precious_oud_tea,
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
            itemName: "إنجلش بريكفست ",
            price: "20",
            description: "",
            image: english_breakfast,
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
            itemName: "أرابيان نايت  ",
            price: "20",
            description: "",
            image: arabian_night,
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
            itemName: "سينامون ستار ",
            price: "20",
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
            itemName: " أخضر مع الكركم ",
            price: "20",
            description: "",
            image: turmeric_green,
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
            itemName: " الياسمين الأخضر ",
            price: "20",
            description: "",
            image: green_jasmine,
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
        categoryName: "المياه",
        items: [
          {
            itemName: "مياه ايفيان ( صغير/ كبير)",
            price: "20/25",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [""],
          },
          {
            itemName: "مياه  فوارة  ( صغير/ كبير)",
            price: "20/25",
            description: "",
            image: placeholder,
            allergies: [""],
            addons: [""],
          },
        ],
      },
    ],
  },
];
