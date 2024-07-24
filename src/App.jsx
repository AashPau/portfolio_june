import "./App.css";
import "./components/Poppins.css";
import { AboutMe } from "./components/pages/AboutMe";
import { Hero } from "./components/pages/Hero";
import { MySkills } from "./components/pages/MySkills";
import { Top } from "./components/pages/Top";

function App() {
  return (
    <>
      <Top />
      <Hero />
      <AboutMe />
      <MySkills />
    </>
  );
}

export default App;
