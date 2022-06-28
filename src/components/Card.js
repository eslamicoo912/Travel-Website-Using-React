import React from "react";

const card = ({ item, active }) => {
  const { id, img, title, price } = item;

  return (
    <div className="mt-5 card col-3">
      <div className="img-cont">
        <img className="img-fluid" src={img} />
      </div>
      <div className="info px-2">
        <h1 className="py-3">{title}</h1>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default card;
