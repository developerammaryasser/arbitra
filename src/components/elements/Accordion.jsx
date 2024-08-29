"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Typography, { H4 } from "./Typography";

const Accordion = ({ items }) => {
  // Initialize the first item as active
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4 font-poppins">
      {items.map((item, index) => (
        <div key={index} className="h-fit bg-white w-full shadow-md rounded-md">
          <div
            className={`flex justify-between items-center cursor-pointer py-4 px-4 transition-all`}
            onClick={() => onTitleClick(index)}
          >
            <H4 className={`font-medium`}>{item.title}</H4>
            <span>
              {index === activeIndex ? (
                <IoIosArrowUp className="w-5 h-5" />
              ) : (
                <IoIosArrowDown className="w-5 h-5" />
              )}
            </span>
          </div>
          <div
            className={`px-4 py-0 overflow-hidden transition-all duration-500 ease-in-out ${
              index === activeIndex ? "max-h-96" : "max-h-0"
            }`}
          >
            <Typography className="!text-n-1/80 pb-4 !text-base text-start">{item.text}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
