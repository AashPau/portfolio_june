import { Image } from "../Image";

export const Hero = () => {
  return (
    <div className="bg-black min-h-dvh flex justify-center">
      <div className=" flex items-center gap-20">
        <div className="info p-4 text-white ms-auto w-1/2">
          <h2 className="mb-6">Hi, I am Aashish.</h2>
          <div></div>
          <div></div>
          <div className="flex gap-4">
            <button className="bg-blue-600 p-3 rounded">DOWNLOAD CV</button>
            <button>GitHub</button>
            <button>LinkedIn</button>
          </div>
        </div>
        <div className="flex items-center me-auto w-1/2">
          <Image />
        </div>
      </div>
    </div>
  );
};
