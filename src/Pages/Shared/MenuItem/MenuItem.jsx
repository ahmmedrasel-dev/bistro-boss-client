import React from "react";

const MenuItem = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} -----------</h3>
        <p>{recipe}</p>
      </div>
      <p>${price}</p>
    </div>
  );
};

export default MenuItem;
