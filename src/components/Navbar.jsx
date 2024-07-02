// import React from 'react'

import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6  flex items-center justify-between border-b-[1px] border-zinc-600">
      <div className="nleft flex items-center ">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-16 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-0.5 h-5 bg-zinc-600"></span>
            ) : (
              <a
                className="text-sm flex items-center gap-1.5"
                href="#"
                key={index}
              >
                {index == 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.75em #00ff19" }}
                    className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                  ></span>
                )}

                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
