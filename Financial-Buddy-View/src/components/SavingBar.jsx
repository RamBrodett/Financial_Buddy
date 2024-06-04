
import PropTypes from 'prop-types';
import { useState } from 'react';

const SavingBar = ({Currency, Value}) => {
    const[visible, setVisible] = useState(true);
    const formattedValue = Value.toLocaleString(undefined,{
        minimumFractionDigits:2,
        maximumFractionDigits:2,});
    const asterisks = '*'.repeat(formattedValue.length);
    return (
        <div className='bg-slate-50 h-[90px] flex flex-row p-6 rounded-md border border-4 w-full' id="Savings_Bar_Container">
            <h1 className='font-customFont font-bold text-xl self-center md:text-4xl'>Savings</h1>
            <div className='self-center ml-4' id="Value">
                <p className="ml-4 text-xl text-slate-600 font-sans md:ml-16 md:text-4xl ">{Currency} {visible ? formattedValue : asterisks}</p>
            </div>
        </div>
    )
}
SavingBar.propTypes ={
    Currency: PropTypes.string.isRequired,
    Value: PropTypes.number.isRequired
}

export default SavingBar