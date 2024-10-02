import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BannerTwo from "../BannerTwo/BannerTwo";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecom from "../ChefRecom/ChefRecom";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bristo Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BannerTwo />
      <PopularMenu />
      <CallUs />
      <ChefRecom />
      <FeaturedMenu />
      <Testimonial />
    </div>
  );
};

export default Home;
