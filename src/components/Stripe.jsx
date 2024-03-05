import React from "react";

function Stripe({ elem }) {
  return (
    <div className="w-[16.66%] px-10 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex justify-between items-center">
      <img src={elem.url} alt="" />

      <span className="font-semibold">{elem.number}</span>
    </div>
  );
}

export default Stripe;
