import SavingsCardContainer from "./SavingsCardContainer";
import Proptypes from 'prop-types';

const ProgressBar = ({currSavings, goals}) => {
  return (
    <div className="w-1/2 max-h-full bg-slate-50 mt-5 rounded-md border border-4 p-6" id="ProgressBar_Container">
        <div className="flex flex-col h-full w-full" id="content_container">   
        <span className="font-customFont font-bold text-xl md:text-4xl mb-4 text-color4">Goals</span>
          <SavingsCardContainer currSavings={currSavings} location={1} goals={goals}/>
        </div>
    </div>
  )
}
ProgressBar.propTypes = {
  currSavings: Proptypes.number.isRequired,
}

export default ProgressBar