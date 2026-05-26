import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function TimelineComponent(props) {
    return (
        <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">

                <div className={props.current ? "current-activity" : "normal-activity"}>
                    <FontAwesomeIcon className="w-4.5 h-4.5" icon={faCalendarDays} />
                </div>

                <div className="hidden sm:flex w-full h-0.5" style={{ background: 'linear-gradient(to right, rgba(52,211,153,0.8), rgba(52,211,153,0.2))' }}></div>
            </div>

            <div className="mt-3 sm:pe-8">
                <div key={props.index}>
                    <h3 className="text-lg font-semibold text-white">{props.activity}</h3>
                    <time
                        className="block mb-2 text-sm font-normal leading-none" style={{ color: '#34d399' }}>
                        {props.date}
                    </time>
                </div>
            </div>
        </li>
    );
}

export default TimelineComponent;