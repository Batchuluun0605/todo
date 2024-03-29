import axios from "axios";
import React, { useEffect, useState } from "react";
import Label from "./Label";
type CardType = {
  title: string;
  description: string;
  priority: string;
  label: string;
};
const Card = () => {
  const user: string | null = localStorage.getItem("user");
  const id = user && JSON.parse(user);
  const api = `http://localhost:8000/todo?userId=${id._id}`;
  const [data, setData] = useState([]);
  const handler = async () => {
    try {
      const res = await axios.get(api);
      const data = res.data;
      setData(data.filter((el: any) => el.userId === id._id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handler();
  });

  return (
    <div>
      <header className="flex flex-col gap-5">
        {data.map((el: CardType, index) => (
          <div
            key={el.title + index}
            className="w-[360px] bg-white h-fit rounded-2xl p-3 flex flex-col gap-2"
          >
            <h2 className="text-2xl font-semibold">{el.title}</h2>
            <p className="text-xl ">{el.description}</p>
            <div className="flex gap-2">
              <Label>{el.priority}</Label>
              <p className=" bg-blue-400 px-2 py-1 w-fit rounded-lg ">App</p>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
};

export default Card;
