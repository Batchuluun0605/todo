"use client";
import axios from "axios";
import { Button } from "../components/Button";
import { SizeEnum, Title } from "../components/Title";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const BASE_URL = "http://localhost:8000/auth/signup";

  const router = useRouter();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const submitHandler = async (req: Request, res: Response) => {
    try {
      const createUser = await axios.post(BASE_URL, { ...input });
    } catch (error) {}
  };
  const LoginPage = () => {
    router.push("/login");
  };
  return (
    <div className=" bg-orange-600">
      {input && input.password}
      <div className="w-[400px] m-auto py-52 px-10 flex flex-col gap-4">
        <Title size={SizeEnum.L}>Sign up</Title>
        <form action="" className="flex flex-col gap-5">
          <label htmlFor="" className="flex flex-col gap-3">
            Username
            <input
              type="text"
              placeholder="Create your username"
              className="p-2 rounded-xl border"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </label>
          <label htmlFor="" className="flex flex-col gap-3">
            Password
            <input
              type="password"
              placeholder="Create your password"
              className="p-2 rounded-xl border"
              onChange={(e) =>
                setInput((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </label>
        </form>
        <p className="flex justify-center">
          Already have account?
          <span className=" text-blue-500 cursor-pointer" onClick={LoginPage}>
            Login
          </span>
        </p>

        <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default SignUp;
