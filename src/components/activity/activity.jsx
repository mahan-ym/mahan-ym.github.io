import React from 'react';
import activityData from '../../public/content/activity.json';
import './activity.css';
import TimelineComponent from "./timelineComponent.jsx";

function Activity() {
    const { activities } = activityData;
    const recent = activities.slice(-4);

    return (
        <div className="activity">
            <h1>Activity</h1>
            <ol className="timeline">
                {recent.map((item, index) => (
                    <TimelineComponent
                        key={index}
                        activity={item.activity}
                        date={item.date}
                        type={item.type}
                        current={item.current || false}
                        isLast={index === recent.length - 1}
                    />
                ))}
            </ol>
        </div>
    );
}

export default Activity;
