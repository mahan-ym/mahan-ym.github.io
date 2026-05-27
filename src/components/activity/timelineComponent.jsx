import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faCode, faFlask } from "@fortawesome/free-solid-svg-icons";

const typeIcons = {
    work: faBriefcase,
    education: faGraduationCap,
    project: faCode,
    research: faFlask,
};

const typeLabels = {
    work: "Work",
    education: "Education",
    project: "Project",
    research: "Research",
};

function TimelineComponent({ activity, date, type = "work", current = false, isLast = false }) {
    const icon = typeIcons[type] || faBriefcase;
    const label = typeLabels[type] || "Work";

    return (
        <li className="timeline-item">
            <div className="timeline-icon-col">
                <div className={current ? "current-activity" : "normal-activity"}>
                    <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                </div>
                {!isLast && <div className="timeline-connector" />}
            </div>

            <div className={`timeline-card ${current ? "timeline-card--current" : ""}`}>
                <div className="timeline-card-header">
                    <time className="timeline-date">{date}</time>
                    <span className={`timeline-type-badge timeline-type-badge--${type}`}>{label}</span>
                </div>
                <p className="timeline-activity">{activity}</p>
                {current && (
                    <span className="timeline-current-badge">
                        <span className="timeline-current-dot" />
                        Active
                    </span>
                )}
            </div>
        </li>
    );
}

export default TimelineComponent;
