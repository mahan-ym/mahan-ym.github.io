import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/skills/skills";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Experience from "./components/experience/experience";
import Blogs from "./components/blogs/blog";

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
      <Gallery />
      <Blogs />
      <Contact />
   </>
  );
}

export default App;
