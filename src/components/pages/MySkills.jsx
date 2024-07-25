import bootstrapLogo from "../../assets/Image/Bootstrap_logo.png";
import javascriptLogo from "../../assets/Image/JavaScript-logo.png";
import reactLogo from "../../assets/Image/react-logo.png";
import htmlLogo from "../../assets/Image/HTML5_logo.png";
import cssLogo from "../../assets/Image/CSS3_logo.png";

const skills = [bootstrapLogo, javascriptLogo, reactLogo, htmlLogo, cssLogo];

export const MySkills = () => {
  return (
    <div className="poppins-regular relative p-4 bg-black text-white z-30 box-border">
      <div className=" bg-slate-500 m-10 rounded py-4">
        <div className="flex justify-center">
          <h1 className="text-3xl ms-4 mb-2 font-bold">My Skills</h1>
        </div>
        <hr />
        <div className="flex justify-around gap-5 m-4">
          {skills.map((skill, i) => (
            <img key={i} src={skill} width="80" className="rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};
