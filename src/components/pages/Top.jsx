export const Top = () => {
  return (
    <div className="min-h-32 md:flex p-5 z-20 start-0 border-b bg-black items-center fixed top-0 w-full justify-around poppins-regular box-border">
      <h1 className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text ms-2 font-extrabold text-5xl mb-4 md:mb-0 text-center md:text-start">
        Aashish Paudel
      </h1>
      <div className="flex md:ms-auto gap-3 text-white items-center justify-around md:me-5 box-border">
        <div>HOME</div>
        <div>SKILLS</div>
        <div>ABOUT</div>
        <div>WORK</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
};
