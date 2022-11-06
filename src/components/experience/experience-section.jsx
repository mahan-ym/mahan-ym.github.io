import "./experience.css";

const ExperienceSection = (props) => {
  return (
      <div className="member">
        <div className="member-img">
          {props.icon}
        </div>
        <div className="member-info">
          <h1 className="name">{props.title}</h1>
          <div className="row academy">
            <div className="nine columns main-col">
              {props.content}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ExperienceSection;
