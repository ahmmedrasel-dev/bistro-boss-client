import React from "react";
import { Helmet } from "react-helmet-async";
import menuBg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import Cover from "../../Shared/Cover/Cover";

const MainMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bristo Boss | Menu</title>
      </Helmet>
      <Cover bgImage={menuBg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover bgImage={menuBg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover bgImage={menuBg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover bgImage={menuBg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default MainMenu;
