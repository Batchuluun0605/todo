import React, { ReactNode, useState } from "react";
import Card from "../components/Card";

import Task from "./Task";
import { Button } from "./Button";
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
  const [isOpen, setOpen] = useState(false);
  const handlerOpen = () => {
    setOpen(!isOpen);
  };
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
      <Button onClick={handlerOpen}>Add task +</Button>
      {isOpen && <Task />}
    </div>
  );
};

export default Board;
