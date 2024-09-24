import "./App.css";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";
import Header from "./components/Header.jsx";
import BackgroundGradient from "./components/BackgroundGradients.jsx";

function App() {
  return (
    <div className="relative isolate font-inter text-gray-600">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Hero />
      </div>
      <div className={"relative isolate"}>
        <div className={"flex flex-col gap-32 p-6 lg:px-12"}>
          <About />
          <Skills />
          <Projects />
        </div>
        <Contact />
        <BackgroundGradient
          top={"top-[calc(100%-50rem)]"}
          left={"left-[calc(100%-13rem)] sm:left-[calc(100%-13rem)]"}
          rotate={"120deg"}
        />
      </div>
    </div>
  );
}

export default App;
