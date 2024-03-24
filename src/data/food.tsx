import placeholder from "../images/placeholder.webp";
import gluten_free from "../images/icons/gluten_free.svg";
import recommended from "../images/icons/recommended.svg";
import refined_sugar_free from "../images/icons/refined_sugar_free.svg";
import spicy from "../images/icons/spicy.svg";
import vegan from "../images/icons/vegan.svg";
import sugar_free from "../images/icons/refined_sugar_free.svg";
import adorabowl from "../images/items/adorabowl.webp";
import alkhuzamma from "../images/items/alkhuzamma.webp";
import almastakii from "../images/items/almastakii.webp";
import beetroot_sriracha from "../images/items/beetroot_sriracha.webp";
import berry_bliss_acai from "../images/items/berry_bliss_acai.webp";
import chicken_charcoal from "../images/items/chicken_charcoal.webp";
import free_range_roost from "../images/items/free_range_roost.webp";
import french_toast_zaefran from "../images/items/french_toast_zaefran.webp";
import fromage_frais from "../images/items/fromage_frais.webp";
import healthy_harvest from "../images/items/healthy_harvest.webp";
import joey from "../images/items/joey.webp";
import khameer from "../images/items/khameer.webp";
import labneh_mush from "../images/items/labneh_mush.webp";
import levian_toast from "../images/items/levian_toast.webp";
import merc_mexico_salad from "../images/items/merc_mexico_salad.webp";
import rustic from "../images/items/rustic.webp";
import super_food_central_acai from "../images/items/super_food_central_acai.webp";
import tempeh_pepper_wrap from "../images/items/tempeh_pepper_wrap.webp";
import the_holy_tms from "../images/items/the_holy_tms.webp";
import tomates_secados_alsol from "../images/items/tomates_secados_alsol.webp";
import tonkatsu from "../images/items/tonkatsu.webp";
import tropical_boon_acai from "../images/items/tropical_boon_acai.webp";
import valley_sriracha_toast from "../images/items/valley_sriracha_toast.webp";
import work_to_walk from "../images/items/work_to_walk.webp";
import zesty_ladle_soup from "../images/items/zesty_ladle_soup.webp";
import lean_green from "../images/items/lean_green.webp";

import mushroom_cappuccino from "../images/items/mushroom_cappuccino.webp";

import parisian from "../images/items/parisian.webp";

import acai_of_relief_addons from "../images/categories_addons_images/acai_of_relief_addons.svg";
import pasta_addons from "../images/categories_addons_images/pasta_addons.svg";
import power_protine_addons from "../images/categories_addons_images/power_protine_addons.svg";
import salads_addons from "../images/categories_addons_images/salads_addons.svg";
import burger_addons from "../images/categories_addons_images/burger_addons.svg";

import bliss from "../images/items/bliss.webp";
import alpomodoro from "../images/items/alpomodoro.webp";
import bbq_chicken from "../images/items/bbq_chicken.webp";
import alfredo from "../images/items/alfredo.webp";
import i_am_humbled from "../images/items/i_am_humbled.webp";
import mr_promise from "../images/items/mr_promise.webp";
import span_eggs from "../images/items/span-eggs.webp";
import open_toast_bbq from "../images/items/open_toast_bbq.webp";
export const food = [
  {
    parentCatName: "فطور",
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
            addons: [],
          },
          {
            itemName: "تروبيكال بون أساي",
            price: "45",
            description:
              "فاكهة زهرة الآلام الطازجة، المانجا الطازجة، والجرانولا الخاصة",
            image: tropical_boon_acai,
            allergies: [
              { allergyName: `توصية الشيف`, allergySrc: recommended },
              { allergyName: `خالي من الغلوتين`, allergySrc: gluten_free },
              { allergyName: `Sugar Free`, allergySrc: sugar_free },
              { allergyName: `Vegan`, allergySrc: vegan },
            ],
            addons_img: acai_of_relief_addons,
            addons: [],
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
            addons: [],
          },
        ],
      },
      {
        categoryName: "بروتينات الطاقة",
        items: [
          {
            itemName: "فري رانج روست",
            price: "55",
            description:
              "بيض بينديكت: بيض مسلوق، فاصوليا حمراء خاصة، بطاطا حلوة محمصة، شرائح الأفوكاد ويتم تقديمها مع خبز التوست بالدخن مع صلصة تزاتزيكي ",
            image: free_range_roost,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons_img: power_protine_addons,
            addons: [],
          },
          {
            itemName: "سبان - ايغز",
            price: "55",
            description:
              "عجة فريتاتا، توست شيباتا بحبوب الدخن، اكليل الجبل المطحون",
            image: span_eggs,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons_img: power_protine_addons,
            addons: [],
          },
          {
            itemName: "آي آم همبلد ",
            price: "55",
            description:
              "بيض مخفوق، جبنة من اختيارك،  خضار مشوي يقدم مع خبز التوست الخاص بحبوب الدخن مع الشيدر بالهالبينو ",
            image: i_am_humbled,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons_img: power_protine_addons,
            addons: [],
          },
        ],
      },
      {
        categoryName: "فرنش توست - الوجبات المملحة",
        items: [
          {
            itemName: "فرومآج فرايز",
            price: "45",
            description: "فرنش توست، شرائح حارة، جبن كريمي ",
            image: fromage_frais,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
            ],
            addons: [""],
          },
          {
            itemName: "طماطم سيكادوس آل سول",
            price: "45",
            description: "فرنش توست، طماطم مجففة، جبن كريمي ",
            image: tomates_secados_alsol,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
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
        categoryName: "فرنش توست - حلويات",
        items: [
          {
            itemName: "يوك هيل فارم ",
            price: "50",
            description: "فرنش توست كلاسيكي مع الأيس كريم والتوت  ",
            image: placeholder,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "زعفران",
            price: "50",
            description: "فرنش توست مع كريمة الزعفران والفراولة الطازجة ",
            image: french_toast_zaefran,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "الخزامى",
            price: "50",
            description: "فرنش توست مع كريمة الخزامى والتوت البري ",
            image: alkhuzamma,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "المستكة",
            price: "50",
            description: "فرنش توست مع كريمة شجرة المستكة والموز المكرمل ",
            image: almastakii,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "باريزيان",
            price: "50",
            description:
              "فرنش توست مع كريمة التوفي، جوز البيكان والتوت الأحمر الطازج",
            image: parisian,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
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
        categoryName: "فرنش توست - توست",
        items: [
          {
            itemName: "توست ليفيان ",
            price: "50",
            description: "مخفوق التوفو الطري مع الكمأة القشدية ",
            image: levian_toast,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "جوي ",
            price: "50",
            description: "بيض مخفوق مع صلصة الجواكامولي وشرائح الأفوكادو ",
            image: joey,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "عصيدة اللبنة",
            price: "50",
            description:
              "لبنة، الفطر المقلي والسبانخ، وريحان مقلي مع بيض مسلوق ورقائق الفلفل الحار حارة ",
            image: labneh_mush,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "باربكيو",
            price: "50",
            description:
              "بصل مكرمل، جبنة الشيدر، توفو مشوي مغطاة بصلصة الباربكيو الخاصة",
            image: open_toast_bbq,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "توست فالي سريراتشا",
            price: "50",
            description:
              "صلصة سريراتشا النباتية الخاصة، فراولة الطازجة، ريحان الطازج، لبنة الطازجة ",
            image: valley_sriracha_toast,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
            ],
            addons: [""],
          },
          {
            itemName: "تونكاتسو",
            price: "50",
            description: "كاتسو مغطاة بجبنة الحلومي مع جبنة كريمة بزيت السمسم.",
            image: tonkatsu,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
            ],
            addons: [""],
          },
          {
            itemName: "ذا هولي تي إمز ",
            price: "50",
            description:
              "التوفو الطري، الفطر والسبانخ وجبنة الشيدر المبشورة بنكهة بهار الكاري.",
            image: the_holy_tms,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
              { allergyName: "Spicy", allergySrc: spicy },
            ],
            addons: [""],
          },

          {
            itemName: "دجاج الباربكيو ",
            price: "65",
            description:
              "دجاج مشوي بالباربكيو مع البطاطا المهروسة والبصل المكرمل",
            image: bbq_chicken,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
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
  {
    parentCatName: "قائمة طوال اليوم",
    parentCatCollection: [
      {
        categoryName: "الشوربات ",
        items: [
          {
            itemName: "زيستي لادلي ",
            price: "45",
            description:
              "فلفل أحمر محمص، طماطم محمصة، جزر محمص، مرق الكرفس والخضار ",
            image: zesty_ladle_soup,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
            ],
            addons: [""],
          },
          {
            itemName: "مشروم كابتشينو ",
            price: "45",
            description:
              "شوربة الفطر المحمص المحضرة من  قطع الفطر الطازجة،  الفلفل الحار المشوي، الحليب الطازج، كريمة الطبخ الطازجة، الجزر والزنجبيل مع رشة من قهوة ماتينا العضوية. ",
            image: mushroom_cappuccino,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
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
            addons: [],
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
            addons: [],
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
            itemName: "أدورابول ",
            price: "50",
            description:
              "فاصولياحمراء ريفي، أرز أحمر ريسوتو، صلصلة الجواكامولي الطازجة مع الناتشوز الخاص والكريمة الحامضة",
            image: adorabowl,
            allergies: [
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
              {
                allergyName: "Refined Sugar Free",
                allergySrc: refined_sugar_free,
              },
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
          {
            itemName: "دجاج على الفحم ",
            price: "60",
            description:
              "دجاج متبل بالأعشاب والبهارات يقدم على كريب محضر بالفحم مع البيض المسلوق ",
            image: chicken_charcoal,
            allergies: [
              { allergyName: "توصية الشيف", allergySrc: recommended },
              { allergyName: "خالي من الغلوتين", allergySrc: gluten_free },
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
            addons: [],
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
            addons: [],
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
            addons: [],
          },
        ],
      },
    ],
  },
];
