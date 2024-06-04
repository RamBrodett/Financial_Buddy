import { useState } from 'react';
import PropTypes from 'prop-types';
import LinearWithValueLabel from './progressBarMUI';
const SavingsCard = ({title,goal,currSavings}) => {
    const [progress] = useState((currSavings/goal)*100 >= 100 ? 100 : (currSavings/goal)*100);
    return (
        <div className="flex flex-row w-[200px] h-[80px]  box p-4 bg-color1 shrink-0 shadow-md">
            <div id="icon">
            </div>
            <div id="progressContent">
                <LinearWithValueLabel value={progress} />
                <div id="title">{title}</div>
            </div>
        </div>
    )
}

SavingsCard.propTypes = {
    title: PropTypes.string.isRequired,
    goal: PropTypes.number.isRequired,
    currSavings: PropTypes.number.isRequired,
};

export default SavingsCard