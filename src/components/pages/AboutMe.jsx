import { ImageAlt } from "../Image";

export const AboutMe = () => {
  return (
    <div className="h-dvh text-3xl poppins-regular relative bg-black text-white z-30 box-border">
      <div>
        <h1 className="pt-6 ms-28 font-bold mb-4">ABOUT ME</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
          <div>
            Driven by a strong ambition to fulfill my career goal as a Software
            Developer/Engineer. Dedicated to expanding my knowledge of
            technologies and their fundamentals, I graduated from University
            with a Bachelor of Information Technology in Software Development.
            This education provided me with a robust programming skill set.
            Through self-directed learning and hands-on project experience,
            including my most recent role as a Software Developer, I have
            further developed my professional expertise.
          </div>
          <div className="hidden md:block">
            <ImageAlt />
          </div>
        </div>
      </div>
    </div>
  );
};
