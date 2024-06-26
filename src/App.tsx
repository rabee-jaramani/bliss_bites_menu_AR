import React, { useState } from "react";
import Banner from "./banner/Banner";
import BottomNav from "./components/BottomNav";
import Footer from "./footer/Footer";
import { food } from "./data/food";
import { drinks } from "./data/drinks";
import { desserts } from "./data/desserts";
import { chef_must_have_sides } from "./data/chef_must_have_sides";
import { vegan_plant_based } from "./data/vegan_plant_based";
import { menu_collections } from "./data2";
import { food_categories } from "./data2";
import { drinks_categories } from "./data2";
import { desserts_categories } from "./data2";
import { chef_must_have_categories } from "./data2";
import TopMenu from "./top_menu/TopMenu";
import FB_MENU from "./fb_menu/FB_MENU";
import AboutUsButton from "./components/AboutUsButton";
function App() {
  const scrollTo = (where: string, tabName: string) => {
    if (where === "collection") {
      const element = document.getElementById(
        tabName.replace(/[\s-']/g, "").toLowerCase()
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 190,
          behavior: "smooth",
        });
      }
    }
    if (where === "category") {
      const element = document.getElementById(
        tabName.replace(/[\s-']/g, "").toLowerCase()
      );
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 180,
          behavior: "smooth",
        });
      }
    }
    if (where === "top") {
      const scrollStep = -window.scrollY / (500 / 10); // Adjust the speed as needed
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
      setSelectedCollection("فطور");
    }
  };
  const menu_categories = [
    ...chef_must_have_categories,
    ...desserts_categories,
    ...drinks_categories,
    ...food_categories,
  ];

  // state to handle fb_type change food drinks dessrts
  const [selectedFB_type, setSelectedFB_type] = useState("طعام");

  // selected Collection
  const [selectedCollection, setSelectedCollection] = useState("فطور");

  // selected Category
  const [selectedCategory, setSelectedCategory] = useState("أساي أوف ريليف");

  // collections to render in tabs
  const [selectedCollectionsTabs, setSelectedCollectionsTabs] =
    useState(menu_collections);
  // collections to render in tabs
  const [selectedCategoriesTabs, setSelectedCategoriesTabs] =
    useState(menu_categories);

  const handleFB_Change = () => {
    if (selectedFB_type === "طعام") {
      setSelectedFB_type("أساي أوف ريليف");
    }
    if (selectedFB_type === "المشروبات") {
      setSelectedFB_type("المشروبات");
    }
    if (selectedFB_type === "الحلويات") {
      setSelectedFB_type("حلويات السعادة");
    }
    // if (selectedFB_type === "Cloud Kitchen") {
    //   setSelectedFB_type("Cloud Kitchen");
    //   setFB_List_To_Render(cloud_kitchen_full_menu);
    // }
  };

  return (
    <div className="App">
      <div className="app-container">
        <Banner />
        <TopMenu
          selectedCollectionsTabs={selectedCollectionsTabs}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          selectedCategoriesTabs={selectedCategoriesTabs}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          scrollTo={scrollTo}
        />
        <FB_MENU
          selectedFB_type={selectedFB_type}
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={food}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <FB_MENU
          selectedFB_type={selectedFB_type}
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={chef_must_have_sides}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <FB_MENU
          selectedFB_type="Drinks"
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={drinks}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <FB_MENU
          selectedFB_type="Desserts"
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={desserts}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />

        <FB_MENU
          selectedFB_type="Vegan / Plant Based"
          handleFB_Change={handleFB_Change}
          FB_List_To_Render={vegan_plant_based}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
        />
        <BottomNav
          selectedFB_type={selectedFB_type}
          setSelectedFB_type={setSelectedFB_type}
          handleFB_Change={handleFB_Change}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          scrollTo={scrollTo}
        />
        <AboutUsButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;
