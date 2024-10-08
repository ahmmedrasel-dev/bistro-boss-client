import React from "react";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl rounded-none">
      <figure>
        <img className="w-full" src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline text-orange-600 border-0 border-b-4 bg-slate-50">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
