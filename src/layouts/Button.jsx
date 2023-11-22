import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = (props) => {
  return (
    <div>
      <button className="flex flex-row justify-center items-center gap-4 bg-brightColor hover:bg-black hover:text-white transition-all px-4 py-2 rounded-md cursor-pointer">
        {props.title}
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Button;