import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderBg from "../../../assets/shop/banner2.jpg";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
const Order = () => {
  const categories = ["pizza", "salad", "dessert", "soup", "drinks"];
  const { category } = useParams();
  const selectedCategory = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(selectedCategory);
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bristo Boss | Orders </title>
      </Helmet>
      <Cover bgImage={orderBg} title="Our Orders"></Cover>
      {/* Main Cover */}

      <div className="py-8">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Pizza</Tab>
            <Tab>Salad</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soups</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-4">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-4">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-4">
              {desserts.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-4">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-4">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
