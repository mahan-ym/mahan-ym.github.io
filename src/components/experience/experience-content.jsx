import "./experience.css";

const ExperienceContent = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p className="info">{props.role}<span className="info"> &bull;</span> <em className="info">{props.year}</em></p>
      <p className="description">
        {props.description}
      </p>
    </div>
  );
};

export default ExperienceContent;
