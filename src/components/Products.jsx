/* eslint-disable no-undef */
// import React from "react";

import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

// import vid from "./videos/Arqitel.webm";

function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },

    {
      title: "Singularity",
      description:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      live: true,
      case: false,
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: false,
    },
    {
      title: "Intenseye",
      description:
        "A brand new website for Intenseye just before their $64M Series.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  // const videoRef = useRef(null);

  // const handleMouseEnter = () => {
  //   // videoRef.current.play();
  //   videoRef.current.play();
  // };

  // const handleMouseLeave = () => {
  //   videoRef.current.pause();
  //   // videoRef.current.currentTime = 0; // Reset video to the beginning
  // };

  const mover = (val) => {
    setPos(val * 19);
  };

  return (
    <div className="mt-28 mb-[18rem] relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-40%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.6 }}
          className="window absolute w-[25rem] h-[19rem] bg-slate-500 rounded-xl left-[40%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-red-300 pointer-events-auto"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <video
              // 1st arqitel
              // ref={videoRef}
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/Arqitel.webm`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-red-400 "
            // onMouseEnter={handleMouseEnter}
          >
            <video
              // 2nd cula
              // ref={videoRef}

              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/Cula.mp4`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-red-500 "
          >
            <video
              // ref={videoRef}
              // 3 layout land
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/layout.mp4`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-green-300 "
          >
            <video
              // ref={videoRef}
              // 4 ttr
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/ttr.webm`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-green-500 "
          >
            <video
              // ref={videoRef}
              // 5 maniv
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/maniv.mp4`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-red-600 "
          >
            <video
              // ref={videoRef}
              // 6  singularity
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/singularity.webm`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-pink-500 "
          >
            <video
              // ref={videoRef}
              // 7 like magic
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/likemagic.webm`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-violet-300 "
          >
            <video
              // ref={videoRef}
              //  8 slivr
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/Silvr.webm`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-violet-500 "
          >
            <video
              // ref={videoRef}
              // 9 rainfall
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/rainfall.webm`}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 0.5 }}
            className="w-full h-full bg-cyan-300 "
          >
            <video
              // ref={videoRef}
              // intenseye
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              src={`/videos/intenseye.webm`}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
