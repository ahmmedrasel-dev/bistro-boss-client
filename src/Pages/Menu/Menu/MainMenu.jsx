import React from "react";
import { Helmet } from "react-helmet-async";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const MainMenu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bristo Boss | Menu</title>
      </Helmet>
      <Cover bgImage={menuBg} title="Our Menu"></Cover>
      {/* Main Cover */}
      <SectionTitle
        heading="Today's Offer"
        subHeading="Don't miss"
      ></SectionTitle>
      {/* Offered Menu Item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu Item */}
      <MenuCategory
        items={desserts}
        title="Desserts"
        coverImg={dessertImg}
      ></MenuCategory>
      {/* Pizza Menu Item */}
      <MenuCategory
        items={desserts}
        title="Pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* Pizza Menu Item */}
      <MenuCategory
        items={desserts}
        title="Salad"
        coverImg={saladImg}
      ></MenuCategory>
      {/* Pizza Menu Item */}
      <MenuCategory
        items={desserts}
        title="Soup"
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default MainMenu;
