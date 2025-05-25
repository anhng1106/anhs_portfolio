import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Timeline } from "./components/Timeline";
import { Education } from "./components/Education";
import { About } from "./components/About";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Timeline />
      <Projects />
      <About />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
