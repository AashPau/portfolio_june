import me from "../assets/Image/me.jpg";
import me_alt from "../assets/Image/me_alt.jpg";

export const Image = () => {
  return (
    <>
      {" "}
      <img src={me} className=" rounded-full border-8 border-blue-200" />
    </>
  );
};
export const ImageAlt = () => {
  return (
    <>
      {" "}
      <img src={me_alt} className=" rounded-full border-8 border-blue-200" />
    </>
  );
};
