import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const Separator = () => <div className="w-full h-0.5 bg-gray-400"></div>;

const App = () => {
  return (
    <div className="w-full h-full bg-gradient-to-l from-gray-700 via-gray-900 to-black">
      <Navbar />
      <Separator />
      <About />
      <Separator />
      <Projects />
      <Separator />
      <Skills />
      <Separator />
      <Contact />
      <Separator />
      <Footer />
    </div>
  );
};

export default App;
