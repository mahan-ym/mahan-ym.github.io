import React, {useState} from 'react';
import './GradientCard.css';

const GradientCard = (props) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const {clientX, clientY, currentTarget} = event;
        const box = currentTarget.getBoundingClientRect();
        const x = clientX - box.left;
        const y = clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        setRotate({ x: rotateX, y: rotateY });
    };

    return (
        <div
            key={props.indx}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setRotate({x: 0, y: 0})}
            className="text-container"
            style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
            }}
        >
            <div className="g1"/>
            <div className="g2"/>
            <div className="g3"/>
            <div className="g4"/>
            <div className="g5"/>
            <h2>{props.position}</h2>
            <p className={"text-2xl"}>{props.company}</p>
            <p>{props.location}</p>
            <p>{props.date} - {props.duration}</p>
            <p className={"text-lg"}>{props.description}</p>
            <ul className="list-disc list-inside">
                {props.achievements.map((achievement, i) => (
                    <li key={i} className="text-balance">{achievement}</li>
                ))}
            </ul>
        </div>
    );
};

export default GradientCard;