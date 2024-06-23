import React from 'react';
import './GradientCard.css';

const SimpleGradientCard = (props) => {

    return (
        <div className="text-container"
             style={{transform: `perspective(1000px) scale3d(1, 1, 1)` ,margin: `2em`}}>
            <div className="g1"/>
            <div className="g2"/>
            <div className="g3"/>
            <div className="g4"/>
            <div className="g5"/>
            {props.children}
        </div>
    );
};

export default SimpleGradientCard;