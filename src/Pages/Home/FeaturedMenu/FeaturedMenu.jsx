import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import feature from "../../../assets/home/featured.jpg";
import "./style.css";
const FeaturedMenu = () => {
  return (
    <section className="featured_item text-white py-20">
      <div className="overlay"></div>
      <div className="z-20 relative">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check it Out"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center py-20 px-36">
          <div>
            <img src={feature} alt="" />
          </div>
          <div className="md:ml-10">
            <p className="uppercase">Aug 20, 2029</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              maiores quam id vel ullam, sit dolorem illum necessitatibus
              consectetur ratione nisi tenetur adipisci doloremque delectus
              officia dolores laboriosam! Quod quis architecto pariatur
              repudiandae corporis perferendis, nam, ad ab tempora aspernatur
              qui earum aliquam ut. Cumque eligendi accusantium in consequuntur.
              Iusto nesciunt laborum commodi quo facere non ipsum exercitationem
              aliquid minus.
            </p>
            <button class="btn btn-outline btn-success border-0 border-b-4 mt-6">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
