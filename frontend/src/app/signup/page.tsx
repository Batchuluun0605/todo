"use client";
import axios from "axios";
import { Button } from "../components/Button";
import { SizeEnum, Title } from "../components/Title";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  // const BASE_URL = "http://localhost:8000/auth/signup";

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const createUser = await axios.post("http://localhost:8000/auth/signup", {
        username: username,
        password: password,
      });
      if (createUser) {
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (error: any) {
      setError(error.msg);
    }
  };
  const LoginPage = () => {
    router.push("/login");
  };
  return (
    <div className=" bg-orange-600 h-screen">
      <div className="w-[400px] m-auto py-72 px-10 flex flex-col gap-4">
        <Title size={SizeEnum.L}>Sign up</Title>
        {error && <p className="text-red-600 my-2">{error}</p>}
        <form action="" className="flex flex-col gap-5">
          <label htmlFor="" className="flex flex-col gap-3">
            Username
            <input
              type="text"
              placeholder="Create your username"
              className="p-2 rounded-xl border"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="" className="flex flex-col gap-3">
            Password
            <input
              type="password"
              placeholder="Create your password"
              className="p-2 rounded-xl border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </form>
        <p className="flex justify-center">
          Already have account?
          <span className=" text-blue-500 cursor-pointer" onClick={LoginPage}>
            Login
          </span>
        </p>

        <Button onClick={submitHandler}>Sign up</Button>
      </div>
    </div>
  );
};

export default SignUp;
