import React from 'react';
import './styles.css';

type Props = {
    percentage: number;
};

function ProgressBar(props: Props) {
    let percentageProgress = props.percentage;
    if (percentageProgress > 100) {
        percentageProgress = 100;
    }
    return (
        <div className="progress-container">
            <div className="progress">
                <div
                    className="progress-bar"
                    style={{ width: `${percentageProgress}%` }}
                ></div>
            </div>
        </div>
    );
}

ProgressBar.defaultProps = {
    percentage: 80,
};

export default ProgressBar;
