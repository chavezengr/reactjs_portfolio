import { motion } from "framer-motion";
import React, { useState } from "react";

const Projects = () => {
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);

  return (
    <>
      <ul
        className="container mx-auto divide-y divide-gray-400 divide-dotted"
        style={{ font: "Raleway" }}
      >
        <li className="flex items-center justify-between px-4 py-2">
          <div className="flex flex-row w-full">
            <motion.span
              animate={{
                y: 100,
                x: move ? 200 : -100,
                scale: 1,
                rotate: rotate ? 360 : 0,
              }}
              transition={{ type: "spring", delay: 1 }}
              initial={{ scale: 0 }}
              onClick={() => setRotate(!rotate)}
              className="inline w-20 h-20 bg-red-600 text-white px-3 py-2 rounded-md mr-1 mb-1"
            >
              1
            </motion.span>

            <motion.button
              animate={{
                y: 100,
                x: move ? 400 : -400,
                scale: 1,
                rotate: rotate ? 360 : 0,
              }}
              transition={{ type: "spring", delay: 1 }}
              initial={{ scale: 0 }}
              onClick={() => setRotate(!rotate)}
              className="inline w-20 h-20 bg-green-600 text-white px-3 py-2 rounded-md mr-1 mb-1"
            >
              1
            </motion.button>

            <button onClick={() => setMove(!move)}> Move The Box </button>
            <p className="text-slate-200">
              The quick brown fox jumps over the lay dog{" "}
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Projects;
