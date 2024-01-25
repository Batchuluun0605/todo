import React, { ReactNode } from "react";
export enum ColorEnum {
  YELLOW,
  BLUE,
  GREEN,
}
type BoardType = {
  children: ReactNode;
  color: ColorEnum;
};
const Board = ({ children, color }: BoardType) => {
  return (
    <div className="flex gap-3 w-[400px] bg-white h-fit">
      <p
        className={` py-6 px-6 
        ${color === ColorEnum.YELLOW && "text-yellow-300"}
        ${color === ColorEnum.BLUE && "text-blue-600"}
        ${color === ColorEnum.YELLOW && "text-green-600"}`}
      >
        <span>{children}</span>
      </p>
    </div>
  );
};

export default Board;
