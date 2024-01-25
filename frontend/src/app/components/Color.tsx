import React from "react";
export enum ColorEnum {
  YELLOW,
  BLUE,
  GREEN,
}
type ColorType = {
  color: ColorEnum;
};
const Color = ({ color }: ColorType) => {
  return (
    <div>
      <p
        className={` w-2 h-2 ${
          color === ColorEnum.YELLOW && "text-yellow-300"
        }`}
      ></p>
    </div>
  );
};

export default Color;
