import "./experience.css";

const ExperienceSection = (props) => {
  return (
      <div className="member">

        <div className="section-header">
          {props.icon}
          <h1>{props.title}</h1>
        </div>

        <div className="member-info">
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
