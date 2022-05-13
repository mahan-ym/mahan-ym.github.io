import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/skills/skills";
import $ from 'jquery';
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Experience from "./components/experience/experience";

function App() {
  return (
   <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <div className="bg-circle3"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
   </>
  );
}

export default App;
