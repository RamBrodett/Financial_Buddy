import PropTypes from 'prop-types';
import SavingsCard from './SavingsCard';

const SavingsCardContainer = ({currSavings, location, goals}) => {
    return (
        <>
            {location === 1 ? (
                <div className='grid xs:h-3/6 w-full overflow-y-auto overflow-x-hidden
                grid-cols-1 grid-row-4 gap-4 
                md:grid-cols-2 md:grid-rows-3
                lg:grid-cols-4 lg:grid-rows-2 lg:gap-5'>
                    {goals? goals.map((goal, index) => (
                        <SavingsCard
                            key={index}
                            title={goal.title}
                            goal={goal.goalPrice}
                            currSavings={currSavings}
                        />
                    )): null}
            </div>

            ):(
                <div className='grid xs:h-3/6 w-full overflow-y-auto
                grid-cols-1 grid-row-4 gap-7 
                md:grid-cols-2 md:grid-rows-3
                lg:grid-cols-8 lg:grid-rows-1'>
                    {goals? goals.map((goal, index) => (
                        <SavingsCard
                            key={index}
                            title={goal.title}
                            goal={goal.goalPrice}
                            currSavings={currSavings}
                        />
                    )):null}
                </div>
            )}
        </>
    )
}

SavingsCardContainer.propTypes = {
    currSavings: PropTypes.number.isRequired,
    location: PropTypes.number.isRequired,
    goals: PropTypes.array,
};

export default SavingsCardContainer