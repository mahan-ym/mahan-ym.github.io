import "./skills.css";
import kotlinIcon from "../resources/kotlin.png"
import gitIcon from "../resources/git.png"
import linuxIcon from "../resources/linux.png"
import javaIcon from "../resources/java.png"
import reactIcon from "../resources/react.png"
import jsIcon from "../resources/js.png"
import tsIcon from "../resources/ts.png"
import androidIcon from "../resources/Android.png"
import swiftIcon from "../resources/swift.png"
import iosIcon from "../resources/iOS.png"
import pythonIcon from "../resources/python.png"
import djangoIcon from "../resources/django.png"




function About() {
  return (
    <div id="skills" className="container skill-container">
      <div>
        <h1 className="member-txt">My Skills</h1>
          <div className="skills">
            <h1 className="member-txt">Programming Languages </h1>
            <SkillBadge
              icon = {kotlinIcon}
              title = 'Kotlin'
            />
            <SkillBadge
              icon = {javaIcon}
              title = 'Java'
            />
            <SkillBadge
              icon = {swiftIcon}
              title = 'Swift3'
            />
            <SkillBadge
              icon = {pythonIcon}
              title = 'Python'
            />
            <SkillBadge
              icon = {tsIcon}
              title = 'TypeScript'
            />
            <SkillBadge
              icon = {jsIcon}
              title = 'JavaScript'
            />
          </div>

          <div className="skills">
            <h1 className="member-txt">Frameworks</h1>
            <SkillBadge
              icon = {androidIcon}
              title = 'Android'
            />
            <SkillBadge
              icon = {iosIcon}
              title = 'iOS'
            />
            <SkillBadge
              icon = {reactIcon}
              title = 'React'
            />
            <SkillBadge
              icon = {djangoIcon}
              title = 'Django'
            />
          </div>

          <div className="skills">
            <h1 className="member-txt">Tools</h1>
            <SkillBadge
              icon = {gitIcon}
              title = 'Git'
            />
            <SkillBadge
              icon = {linuxIcon}
              title = 'Linux'
            />
          </div>
      </div>
    </div>
  );
}
export default About;


const SkillBadge = (props) => {
  return(
    <div className="skill-badge">
        <img src={props.icon} alt="kotlin" />
        <h2>
          {props.title}
        </h2>
    </div>
  );
}