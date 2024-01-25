import React, { ReactNode } from "react";
import Card from "../components/Card";
import AddButton from "./AddButton";
import Task from "./Task";
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
    <div className=" gap-3 w-[400px] bg-gray-300 h-fit flex flex-col py-6 px-6 ">
      <p
        className={`  
        ${color === ColorEnum.YELLOW && "text-yellow-300"}
        ${color === ColorEnum.BLUE && "text-blue-600"}
        ${color === ColorEnum.YELLOW && "text-green-600"}`}
      >
        <span>{children}</span>
      </p>
      <Card />
      <AddButton />
      <Task />
    </div>
  );
};

export default Board;
