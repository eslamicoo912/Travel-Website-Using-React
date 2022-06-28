import React from "react";

const DestinationsCard = ({ item }) => {
  const { id, img, title, desc } = item;
  return (
    <div className="dist-card">
      <img src={img} />
      <div className="info">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default DestinationsCard;
