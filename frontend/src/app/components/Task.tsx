import axios from "axios";
import React, { useState } from "react";
import { Button } from "./Button";
const api = "http://localhost:8000/todo";
const Task = () => {
  const [input, setInput] = useState({
    title: "",
    userId: "65b1d0d6886cb3adf43a365c",
    description: "",
    priority: "",
    label: "",
  });
  const submitHandler = async () => {
    try {
      const { data } = await axios.post(api, { ...input });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border rounded-xl bg-orange-600 p-4">
      <div className="flex flex-col gap-2">
        Title
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          placeholder="enter title"
          className="border p-2 "
        />
      </div>
      <div className="flex flex-col gap-2">
        Description
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, description: e.target.value }))
          }
          type="text"
          placeholder="enter descrition"
          className="border p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        Priority
        <input
          onChange={(e) =>
            setInput((prev) => ({ ...prev, priority: e.target.value }))
          }
          type="text"
          placeholder="enter priority"
          className="border p-2"
        />
      </div>
      <Button onClick={submitHandler}>Submit</Button>
    </div>
  );
};

export default Task;
