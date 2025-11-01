import React from 'react';
import activityData from '../../public/content/activity.json';
import './activity.css';
import TimelineComponent from "./timelineComponent.jsx";

function Activity() {
    const { PreviousActivity, CurrentActivity, FutureActivity } = activityData;

    return (
        <div className="activity">
            <h1>Activity</h1>

            <ol className="items-center sm:flex m-10">
                {PreviousActivity.map((activity, index) => {
                    if (PreviousActivity.length > 2) {
                        if (index === PreviousActivity.length - 1 || index === PreviousActivity.length - 2)
                            return (
                                <TimelineComponent
                                    key={`prev-${index}`}
                                    index={index}
                                    activity={activity.Activity}
                                    date={activity.Date}
                                />
                            );
                        else if (index === PreviousActivity.length - 3)
                            return
                        else
                            return <React.Fragment key={`prev-empty-${index}`}></React.Fragment>
                    } else {
                        return (
                            <TimelineComponent
                                key={`prev-${index}`}
                                index={index}
                                activity={activity.Activity}
                                date={activity.Date}
                            />
                        );
                    }
                })}

                {CurrentActivity.map((activity, index) => {
                    return (
                        <TimelineComponent
                            key={`current-${index}`}
                            index={index}
                            activity={activity.Activity}
                            date={"Now"}
                            current={true}
                        />
                    );
                })}

                {FutureActivity.filter(activity => activity.Activity).map((activity, index) => {
                    return (
                        <TimelineComponent
                            key={`future-${index}`}
                            index={index}
                            activity={activity.Activity}
                            date={activity.Date}
                        />
                    );
                })}

            </ol>

        </div>
    );
}

export default Activity;