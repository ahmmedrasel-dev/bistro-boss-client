import React from "react";

const ChefCard = ({ title, chef, shotDesc }) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-none">
      <figure>
        <img className="w-full" src={chef} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{shotDesc}</p>
        <div className="card-actions">
          <button className="btn btn-outline text-orange-600 border-0 border-b-4 bg-slate-50">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
