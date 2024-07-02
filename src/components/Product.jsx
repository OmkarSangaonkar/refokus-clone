/* eslint-disable react/prop-types */
// import React from 'react'

import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className={`w-full text-white py-20 h-[18rem]  bg-sky-500 mt-4`}>
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl capitalize font-meduim">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 w-4/5 text-justify">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
