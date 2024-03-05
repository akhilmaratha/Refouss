import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({ width, start, para, hover="false"}) {
  
  return (
    <motion.div
     whileHover={{backgroundColor: hover==="true" && "#7443ff",padding:"25px"}} className={` bg-zinc-800 p-5 rounded-lg hover:bg-violet-600 ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>One</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5 ">a'dfkasa</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tighte leading-none">
              Start Project
            </h1>
            <button className="rounded-full py-2 px-3 border-[1px] border-zinc-50 mt-5">
              Contact US
            </button>
          </>
        ) }
        {para&&(<p className="text-sm text-zinx-500 font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>)}
        
      </div>
    </motion.div>
  );
}

export default Card;
