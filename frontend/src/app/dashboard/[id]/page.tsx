"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SignOut from "../../icon/SignOut";
import SwitchTab from "../../components/SwitchTab";
import Board, { ColorEnum } from "../../components/Board";
import Card from "../../components/Card";
const Page = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   const rawJson: string | null = localStorage.getItem("user");
  //   const user = rawJson && JSON.parse(rawJson);

  //   if (!user) {
  //     router.push("/login");
  //     return;
  //   }

  //   const { _id, username, password } = user;

  //   if (!_id || !username || !password) {
  //     router.push("/login");
  //     return;
  //   }
  // }, []);
  return (
    <div className=" bg-slate-100 h-screen flex">
      <div className="w-[300px] bg-white flex flex-col gap-4 h-screen py-10 px-6">
        <h1>Todo App</h1>
        <div className="border-b"></div>
        <div className="border p-1 bg-slate-400 flex gap-1 rounded w-1/2">
          <p>Sign out</p>
          <SignOut />
        </div>
      </div>
      <div className="py-10 px-6 flex flex-col gap-4 w-[1300px]">
        <div>
          <h1 className=" text-3xl">Drawstask</h1>
        </div>
        <div className="flex">
          <SwitchTab />
        </div>
        <div className="border-b w-full"></div>
        <div className="flex gap-7">
          <Board color={ColorEnum.YELLOW}>To do</Board>
          <Board color={ColorEnum.BLUE}>In Progress</Board>
          <Board color={ColorEnum.GREEN}>Completed</Board>
        </div>
      </div>
    </div>
  );
};

export default Page;
