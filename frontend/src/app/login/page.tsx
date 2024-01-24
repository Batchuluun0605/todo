"use client";
import { Button } from "../components/Button";
import { SizeEnum, Title } from "../components/Title";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const BASE_URL = "http://localhost:8000/auth/login";

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(BASE_URL, {
        ...input,
      });

      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/dashboard");
    } catch (error: any) {
      setError(error.response.data.msg);
    }
  };
  const SignUpPage = () => {
    router.push("/signup");
  };

  return (
    <div className=" bg-orange-600">
      <div className="max-w-[400px]  m-auto py-52 px-10 flex flex-col gap-4">
        <Title size={SizeEnum.L}>Login</Title>
        {error && <p className="text-red-600 my-2">{error}</p>}

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-3">
            Username
            <input
              onChange={(e) =>
                setInput((prev) => ({ ...prev, username: e.target.value }))
              }
              className="border p-2  rounded-xl"
              placeholder="Enter your username"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-3 ">
            Password
            <input
              onChange={(e) =>
                setInput((prev) => ({ ...prev, password: e.target.value }))
              }
              className="border p-2  rounded-xl"
              placeholder="Enter your username"
              type="password"
            />
          </label>
          <p className="m-auto">
            Don’t have account?
            <span
              className="text-blue-400 w-screen cursor-pointer"
              onClick={SignUpPage}
            >
              Sign up
            </span>
          </p>
          <Button onClick={submitHandler}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
