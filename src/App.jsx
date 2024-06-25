import "./App.css";
import "./components/Poppins.css";
import { AboutMe } from "./components/pages/AboutMe";
import { Hero } from "./components/pages/Hero";
import { Top } from "./components/pages/Top";

function App() {
  return (
    <>
      <Top />
      <Hero />
      <AboutMe />
    </>
  );
}

export default App;
