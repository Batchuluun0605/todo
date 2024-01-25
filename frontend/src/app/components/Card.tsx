import React from "react";
type CardType = {
  title: string;
  description: string;
  priority: string;
  label: string;
};
const Card = ({ title, description, priority, label }: CardType) => {
  return (
    <div>
      <h3>{}</h3>
    </div>
  );
};

export default Card;
