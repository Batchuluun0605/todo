import React from "react";
type LabelType = {
  children: string;
};
const Label = ({ children }: LabelType) => {
  return (
    <div>
      <p className=" bg-orange-700 px-2 py-1 w-fit rounded-xl">{children}</p>
    </div>
  );
};

export default Label;
