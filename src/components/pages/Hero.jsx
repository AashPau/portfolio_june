import { Image } from "../Image";
import { TypingEffect } from "../TypingEffect";

export const Hero = () => {
  return (
    <div className="bg-black min-h-dvh flex">
      <div className=" ms-20 flex items-center gap-5 ">
        <div className="ps-4 flex flex-col w-1/2 ">
          <div className="flex flex-col info p-4 text-white me-auto gap-2 ">
            <h2 className="text-4xl">
              Hi, I am <span className=" text-white">Aashish.</span>
            </h2>
            <div className="text-3xl font-extrabold">
              I'm a <TypingEffect />
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
            <button>GitHub</button>
            <button>LinkedIn</button>
          </div>
        </div>
        <div className="flex items-start w-1/3 ">
          <Image />
        </div>
      </div>
    </div>
  );
};
