/* eslint-disable react/prop-types */
// import React from 'react'
import classNames from "classnames";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({ width, para, start }) {
  return (
    <div
      className={classNames(
        width,
        "bg-zinc-800 rounded-xl p-5 min-h-[28rem] flex flex-col justify-between",
        start ? `hover:bg-violet-600` : `hover:bg-zinc-700`
      )}
    >
      <div className="w-full flex justify-between items-center">
        <h3>Up next: News</h3>
        <IoIosArrowRoundForward />
      </div>
      <div>
        <h1 className="text-2xl font-medium mt-5">Whatever Heading</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-8xl font-medium tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-6 py-3 px-6 border-[1px] border-zinc-200">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-400 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
