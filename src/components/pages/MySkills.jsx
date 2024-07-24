import bootstrapLogo from "../../assets/Image/Bootstrap_logo.png";
import javascriptLogo from "../../assets/Image/JavaScript-logo.png";
import reactLogo from "../../assets/Image/react-logo.png";
import htmlLogo from "../../assets/Image/HTML5_logo.png";
import cssLogo from "../../assets/Image/CSS3_logo.png";

const skills = [bootstrapLogo, javascriptLogo, reactLogo, htmlLogo, cssLogo];

export const MySkills = () => {
  return (
    <div className="bg-black text-white">
      <h1>My Skills</h1>
      <div className="flex gap-3 ">
        {skills.map((skill, i) => (
          <img key={i} src={skill} />
        ))}
      </div>
    </div>
  );
};
