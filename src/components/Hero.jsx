import React from "react";
import me from "../assets/me.jpg";

export const Hero = () => {
  return (
    <div className="bg-black min-h-dvh flex justify-center">
      <div className=" flex items-center gap-20">
        <div className="info p-4 text-white ms-auto w-1/2">
          <h2>Hi, I am Aashish.</h2>
          <div>
            <button>DOWNLOAD CV</button>
          </div>
        </div>
        <div className="flex items-center me-auto image w-1/2">
          <img src={me} className=" rounded-full" />
        </div>
      </div>
    </div>
  );
};
