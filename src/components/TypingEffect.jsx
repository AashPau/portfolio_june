import { TypeAnimation } from "react-type-animation";

export const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "JAVASCRIPT DEVELOPER.",
        800, // wait 1s before replacing "Mice" with "Hamsters"
        "MERN DEVELOPER.",
        800,
        "WEB DEVELOPER.",
        800,
        "REACT DEVELOPER.",
        800,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
      className=" text-blue-500"
    />
  );
};
