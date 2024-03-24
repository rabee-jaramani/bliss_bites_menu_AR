import Beverages from "./images/top_menu/Beverages.webp";
import All_Day_Menu from "./images/top_menu/All_Day_Menu.webp";
import Breakfast from "./images/top_menu/Breakfast.webp";
import Blissful_Desserts from "./images/top_menu/Blissful_Desserts.webp";
import berry_bliss_acai from "./images/items/berry_bliss_acai.webp";
import strawberry_chilli_jam_with_toast from "./images/items/strawberry_chilli_jam_with_toast.webp";
// =CONCATENATE("{",B3,"'",C3,"'",CHAR(44),D3,"'",E3,"'",CHAR(44),F3,"'",G3,"'",CHAR(44),"image:placeholder",CHAR(44),H3,"[","'",I3,"']}",CHAR(44))

// Note you have to add vegan and
export const menu_collections = [
  { menu_name: "حلويات السعادة", menu_img: Blissful_Desserts },
  { menu_name: "المشروبات", menu_img: Beverages },
  { menu_name: "نباتي", menu_img: berry_bliss_acai },
  {
    menu_name: "أطباق أساسية من اختيار الشيف",
    menu_img: strawberry_chilli_jam_with_toast,
  },
  { menu_name: "قائمة طوال اليوم", menu_img: All_Day_Menu },
  { menu_name: "فطور", menu_img: Breakfast },
];

export const food_collections = ["فطور", "قائمة طوال اليوم"];
export const food_categories = [
  "باستا",
  " برجر بدون خبز",
  "رابس وكريبس ",
  "الأطباق",
  "السلطات",
  "الشوربات ",
  "فرنش توست - توست",
  "فرنش توست - حلويات",
  "فرنش توست - الوجبات المملحة",
  "بروتينات الطاقة",
  "أساي أوف ريليف ",
];
export const drinks_collections = ["المشروبات"];
export const drinks_categories = [
  "المياه",
  "شاي الأعشاب",
  "القهوة العضوية",
  "القهوة المثلجة",
  "عصائر الديتوكس",
];

export const desserts_collections = ["حلويات السعادة"];
export const desserts_categories = [
  "كعكة الشاي",
  "كيك جالور",
  "تشيز كيك",
  "الفطائر",
  `الحلويات المفضلة لدى الشيف`,
];
export const chef_must_have_collections = ["أطباق أساسية من اختيار الشيف"];
export const chef_must_have_categories = ["أطباق أساسية من اختيار الشيف"];
