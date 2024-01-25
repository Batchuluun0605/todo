import React from "react";
type AddButtonType = {
  fn: () => {};
};
const AddButton = ({ fn }: AddButtonType) => {
  return (
    <div>
      <button
        onClick={fn}
        className="border bg-slate-50 w-full flex justify-center p-2 rounded-xl"
      >
        Add task +
      </button>
    </div>
  );
};

export default AddButton;
