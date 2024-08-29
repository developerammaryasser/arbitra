"use client";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Typography from "./Typography";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesToShow = 3;
  const totalSlides = slides.length;
  const slidesPerBlock = slidesToShow; // Number of slides in each block

  const totalBlocks = Math.ceil(totalSlides / slidesPerBlock);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBlocks);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalBlocks) % totalBlocks);
  };

  // Calculate the width of each block
  const blockWidth = 100 / totalBlocks;

  // Determine if buttons should be disabled
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= totalBlocks - 1;

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start gap-8">
      <div
        className="flex transition-transform duration-300 ease-in-out gap-5 w-full"
        style={{
          transform: `translateX(-${currentIndex * blockWidth}%)`,
          width: `${totalBlocks * 100}%`, // Ensure all blocks fit in one row
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-${
              100 / slidesToShow
            }% w-full md:w-[330px] lg:w-[350px] rounded-md border bg-white flex flex-col justify-between items-stretch gap-4 p-8`}
          >
            <Typography className="text-start !text-n-3/80">
              {slide.text}
            </Typography>
            <div>
              <Typography className="text-start font-medium !text-n-3">
                {slide.name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-start gap-3">
        <button
          className={`${
            isPrevDisabled ? "text-gray-300 cursor-not-allowed" : "text-black"
          } transition-all`}
          disabled={isPrevDisabled}
          onClick={prevSlide}
        >
          <BsArrowLeft size={30} />
        </button>
        <button
          className={`${
            isNextDisabled ? "text-gray-300 cursor-not-allowed" : "text-black"
          } transition-all`}
          disabled={isNextDisabled}
          onClick={nextSlide}
        >
          <BsArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
