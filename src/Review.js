import React, { useState } from "react";
import people from "./data";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { url, name, profession, review } = people[index];

  const checkNumber = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };

  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const genRandom = () => {
    setIndex((index) => {
      index = Math.floor(Math.random() * people.length);
      return index;
    });
  };

  return (
    <div className="bg-white drop-shadow-2xl rounded-md max-w-[500px] mx-auto flex flex-col items-center justify-center gap-5 py-10 px-10">
      <div className="relative">
        <img
          src={url}
          alt={name}
          className="max-w-[120px] h-[120px] object-cover rounded-full drop-shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-lg font-bold tracking-wider text-gray-700 capitalize">
          {name}
        </h2>
        <h2 className="text-sm font-extrabold uppercase text-primary">
          {profession}
        </h2>
      </div>
      <div className="text-center">
        <p className="w-full text-sm text-gray-500">{review}</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-10">
        <button className="text-[20px] text-primary" onClick={handlePrev}>
          <HiArrowNarrowLeft />
        </button>
        <button className="text-[20px] text-primary" onClick={handleNext}>
          <HiArrowNarrowRight />
        </button>
      </div>
      <button
        className="px-3 py-1 text-xs text-white capitalize rounded-sm bg-primary hover:bg-[#5f27cd]"
        onClick={genRandom}
      >
        surprise me
      </button>
    </div>
  );
};

export default Review;
