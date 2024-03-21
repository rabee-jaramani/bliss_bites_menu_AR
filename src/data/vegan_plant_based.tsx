import lean_green from "../images/items/lean_green.webp";
import placeholder from "../images/placeholder.webp";
import gluten_free from "../images/icons/gluten_free.svg";
import recommended from "../images/icons/recommended.svg";
import refined_sugar_free from "../images/icons/refined_sugar_free.svg";
import spicy from "../images/icons/spicy.svg";
import vegan from "../images/icons/vegan.svg";
import sugar_free from "../images/icons/refined_sugar_free.svg";
import beetroot_sriracha from "../images/items/beetroot_sriracha.webp";
import berry_bliss_acai from "../images/items/berry_bliss_acai.webp";
import healthy_harvest from "../images/items/healthy_harvest.webp";
import khameer from "../images/items/khameer.webp";
import merc_mexico_salad from "../images/items/merc_mexico_salad.webp";
import rustic from "../images/items/rustic.webp";
import super_food_central_acai from "../images/items/super_food_central_acai.webp";
import tempeh_pepper_wrap from "../images/items/tempeh_pepper_wrap.webp";
import tropical_boon_acai from "../images/items/tropical_boon_acai.webp";
import work_to_walk from "../images/items/work_to_walk.webp";

import acai_of_relief_addons from "../images/categories_addons_images/acai_of_relief_addons.svg";
import pasta_addons from "../images/categories_addons_images/pasta_addons.svg";
import salads_addons from "../images/categories_addons_images/salads_addons.svg";

import alfredo from "../images/items/alfredo.webp";
import alpomodoro from "../images/items/alpomodoro.webp";
import bliss from "../images/items/bliss.webp";
import mr_promise from "../images/items/mr_promise.webp";
import burger_addons from "../images/categories_addons_images/burger_addons.svg";

export const vegan_plant_based = [
  {
    parentCatName: "Vegan Plant Based",
    parentCatCollection: [
      {
        categoryName: "أساي أوف ريليف ",
        items: [
          {
            itemName: "أساي بليس بالتوت",
            price: "45",
            description:
              "موز طازج، والتوت الطازج، والجرانولا الخاصة وبذور الشيا ",
            image: berry_bliss_acai,
            allergies: [
              { allergyName: `توصية الشيف`, allergySrc: recommended },
              { allergyName: `خالي من الغلوتين`, allergySrc: gluten_free },
              { allergyName: `Sugar Free`, allergySrc: sugar_free },
              { allergyName: `Vegan`, allergySrc: vegan },
            ],
            addons_img: acai_of_relief_addons,
            addons: [
            ],
          },
          {
            itemName: "تروبيكال بون أساي",
            price: "45",
            description: "فاكهة زهرة الآلام الطازجة، المانجا الطازجة، والجرانولا الخاصة",
            image: tropical_boon_acai,
            allergies: [
              { allergyName: `توصية الشيف`, allergySrc: recommended },
              { allergyName: `خالي من الغلوتين`, allergySrc: gluten_free },
              { allergyName: `Sugar Free`, allergySrc: sugar_free },
              { allergyName: `Vegan`, allergySrc: vegan },
            ],
            addons_img: acai_of_relief_addons,
            addons: [
            ],
          },
          {
            itemName: "سوبر فود سنترال أساي ",
            price: "45",
            description:
              "شرائح الموز، وزبدة الفستق، وشرائح جوز الهند والجرانولا الخاصة",
            image: super_food_central_acai,
            allergies: [
              { allergyName: `توصية الشيف`, allergySrc: recommended },
              { allergyName: `خالي من الغلوتين`, allergySrc: gluten_free },
              { allergyName: `Sugar Free`, allergySrc: sugar_free },
              { allergyName: `Vegan`, allergySrc: vegan },
            ],
            addons_img: acai_of_relief_addons,
            addons: [   
            ],
          },
        ],
      },
      {
        categoryName: "السلطات",
        items: [
          {
            itemName: " ميرك مكسيكو ",
            price: "50",
            description:
              "صوس جواكامولي، أوراق سبانخ صغيرة، جبنة حلومي، طماطم كرزية، جوز البيكان، ورقائق الناتشوز والكراكز الخاصة الخالية من الجلوتين. ",
            image: merc_mexico_salad,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: salads_addons,
            addons: [
            ],
          },
          {
            itemName: " هيلثي هارفست",
            price: "50",
            description:
              "حبوب كينوا بألوانها، بروكلي مدخن، شمندر طازج، جبنة الفيتا، جزر، خيار وخضار مشكل",
            image: healthy_harvest,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: salads_addons,
            addons: [
            ],
          },
        ],
      },
      {
        categoryName: "الأطباق",
        items: [
          {
            itemName: "رستك ",
            price: "50",
            description:
              "عدس ريفي، بروكولي مشوي على الفحم، والمانجا، فاكهة زهرة الآلام، وفلفل شوتني الذي يقدم مع الخضار المشوي.",
            image: rustic,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
        
          {
            itemName: "وك تو ووك ",
            price: "50",
            description:
              "نودلز الأزر، صلصة سريراتشا النباتية الخاصة، توفو مغطاة بصلصة السريراتشا، وفطر مشوي مع أسباراجاس",
            image: work_to_walk,
            allergies: [
              { allergyName: `توصية الشيف`, allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
          {
            itemName: "خمير ",
            price: "50",
            description:
              "كمية كبيرة من الحمص الأخضر، خبز البيتا الخاص، جبنة حلومي مشوية، سلطة بالحمص مع الخضراوات المشوية والثومية. ",
            image: khameer,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
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
        categoryName: "رابس وكريبس ",
        items: [
          {
            itemName: "البنغريق بالفلفل",
            price: "55",
            description:
              "البنغريق المخلوط، مع شوربة الكاري التي تقدم مع مُرَبَّيات الخاصة والمايونيز النباتي ",
            image: tempeh_pepper_wrap,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
          {
            itemName: "الشمندر بصلصة السريراتشا الحارة ",
            price: "55",
            description:
              "توفو مغطاة بصلصة السريراتشا الحارة، بروكلي مشوي على الفحم ومايونيز بالسريراتشا الخاصة ملفوفة بالخس والكالي ",
            image: beetroot_sriracha,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons: [""],
          },
         
        ],
      },
      {
        categoryName: " برجر بدون خبز",
        items: [
          {
            itemName: "لين جرين ",
            price: "55",
            description:
              "برغر كينوا: فلفل حلو محمص ، مخلل الخيار، بصل مكرمل، جبنة الشيدر وجبنة كريمية باللوز وبطاطا حلوة مقلية",
            image: lean_green,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: burger_addons,
            addons: ["Sesame burger bun bread optional"],
          },
          {
            itemName: "مستر برومس ",
            price: "55",
            description:
              "برغر الكاكايا بالدجاج النباتي: فلفل حلو محمص، مشوي مع ثوم يقدم على طبقة من الخس الطازج وأوراق السبانخ الصغيرة ",
            image: mr_promise,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: burger_addons,
            addons: ["Sesame burger bun bread optional"],
          },
        ],
      },
      {
        categoryName: "باستا",
        items: [
          {
            itemName: "ألبومدورو",
            price: "55",
            description:
              "باستا خاصة خالية من الجلوتين، صلصة الطماطم الطازجة والخالية من الجلوتين، أعشاب طازجة، بارميزان مع خبز الثوم الخالي من الجلوتين",
            image: alpomodoro,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: pasta_addons,
            addons: [
            ],
          },
          {
            itemName: "ألفريدو",
            price: "55",
            description:
              "باستا خاصة خالية من الجلوتين، صلصة كريمة الخضار الخاصة،  الخضروات المجففة المشوية، خبز الثوم الخالي من الجلوتين ",
            image: alfredo,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: pasta_addons,
            addons: [
            ],
          },
          {
            itemName: "بليس",
            price: "55",
            description:
              "صلصة خاصة مع التوابل والأعشاب المطحونة، كريمة نباتية، تقدم مع خبز الثوم الخالي من الجلوتين",
            image: bliss,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Vegan", allergySrc: vegan },
            ],
            addons_img: pasta_addons,
            addons: [
            ],
          },
        ],
      },
    ],
  },
];
