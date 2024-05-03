import { useState } from "react";
import PropTypes from 'prop-types';

const ExpensesBar = ({Currency, Value}) => {
  const[visible, setVisible] = useState(true);
  const formattedValue = Value.toLocaleString(undefined,{
    minimumFractionDigits:2,
    maximumFractionDigits:2,});
  const asterisks = '*'.repeat(formattedValue.length);
  return (
    <div className='bg-slate-50 h-[90px] flex flex-row p-6 rounded-md border border-4 w-full' id="Expenses_Bar_Container">
        <h1 className='font-customFont font-bold text-4xl self-center'>Expenses</h1>
        <div className='self-center ml-4 flex' id="Value">
        <p className="ml-10 text-4xl text-slate-600 font-sans ">{Currency} {visible ? formattedValue : asterisks}</p>
        </div>
    </div>
  )
}
ExpensesBar.propTypes ={
    Currency: PropTypes.string.isRequired,
    Value: PropTypes.number.isRequired
}
export default ExpensesBar