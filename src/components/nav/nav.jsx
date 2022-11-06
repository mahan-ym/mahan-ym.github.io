import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline, MdOutlineBuild } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon" />
      </a>
      <a href="#skills">
        <MdOutlineBuild className="icon" />
      </a>
      <a href="#experience">
        <MdWorkOutline className="icon" />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
