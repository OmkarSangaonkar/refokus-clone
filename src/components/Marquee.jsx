/* eslint-disable react/prop-types */
// import React from 'react'

import { motion } from "framer-motion";

function Marquee({ imgurls, direction }) {
  return (
    <div className="flex flex-shrink-0 justify-between  w-full py-5 ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 24, repeat: Infinity }}
        className="flex flex-shrink-0 py-10 gap-20  pr-20"
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        {imgurls.map((url, index) => (
          <img
            src={url}
            key={index}
            alt="marquee"
            className="flex-shrink-0 w-24 m-2 pr-2"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 24, repeat: Infinity }}
        className="flex flex-shrink-0 justify-between gap-20 py-10  pr-20"
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        {imgurls.map((url, index) => (
          <img
            src={url}
            key={index}
            alt="marquee"
            className="flex-shrink-0 w-24 m-2 pr-2"
          />
        ))}
      </motion.div>

      {/* {imgurls.map((url, index) => (
        <img key={index} src={url} className="w-28 flex-shrink-0" />
      ))} */}
    </div>
  );
}

export default Marquee;
