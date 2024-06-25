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
        <div className=" md:ms-20 flex items-center mt-20 gap-5 z-10 box-border">
          <div className="md:ps-4 flex flex-col md:w-1/2 ">
            <div className="flex flex-col info p-4 text-white  gap-2 ">
              <h2 className="text-4xl">
                Hi, I am <span className=" text-white">Aashish.</span>
              </h2>
              <div className="text-2xl sm:text-3xl poppins-bold md:poppins-bolder inline-block box-border">
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
                <a href="https://github.com/AashPau" target="_blank">
                  <FaGithub className="text-5xl" />
                </a>
              </button>
              <button className=" border-blue-500 border-2 ">
                <a
                  href="https://www.linkedin.com/in/aashish-paudel-37a570158"
                  target="_blank"
                >
                  <FaLinkedin className="text-5xl" />
                </a>
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
