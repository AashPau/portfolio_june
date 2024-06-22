import { Image } from "../Image";
import { ParticlesComp } from "../ParticlesComp";
import { TypingEffect } from "../TypingEffect";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  return (
    <div>
      <div className="bg-black min-h-dvh flex poppins-regular">
        <ParticlesComp className="-z-10" />
        <div className=" md:ms-20 flex items-center gap-5 z-10 box-border">
          <div className="ps-4 flex flex-col md:w-1/2 ">
            <div className="flex flex-col info p-4 text-white  gap-2 ">
              <h2 className="text-4xl">
                Hi, I am <span className=" text-white">Aashish.</span>
              </h2>
              <div className="text-3xl poppins-extrabold inline-block box-border">
                <TypingEffect />
              </div>
              <div>
                <h2 className=" text-2xl">
                  Energetic and Enthuastic Full stack Mern Developer with great
                  passion for programming.
                </h2>
              </div>
            </div>
            <div className="flex gap-4 p-4 text-white">
              <button className="bg-blue-600 p-3 rounded">DOWNLOAD CV</button>
              <button className=" border-blue-500 border-2 rounded-full">
                <FaGithub className="text-5xl" />
              </button>
              <button className=" border-blue-500 border-2 ">
                <FaLinkedin className="text-5xl" />
              </button>
            </div>
          </div>
          <div className=" items-start w-1/3 hidden md:block">
            <Image />
          </div>
        </div>
      </div>
    </div>
  );
};
