/* eslint-disable react/prop-types */
// import React from 'react'

import { motion } from "framer-motion";

// import Stripes from "./Stripes";

function Stripe({ data }) {
  // console.log(data);
  return (
    <div className="flex w-full overflow-hidden mt-10 ">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className=" w-full flex justify-between items-center flex-shrink-0 "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="border-[0.8px] p-5 border-zinc-400 h-16 flex  justify-between items-center gap-8"
          >
            <img src={item.url} alt="" />
            <span>{item.number}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className=" w-full flex justify-between items-center flex-shrink-0 "
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="border-[0.8px] p-5 border-zinc-400 h-16 flex  justify-between items-center gap-8"
          >
            <img src={item.url} alt="" />
            <span>{item.number}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Stripe;
