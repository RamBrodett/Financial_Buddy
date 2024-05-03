import ExpensesBar from "../components/ExpensesBar";

const ExpensesPage = () => {
  return (
    <div className="flex flex column py-2 px-7" id="Expenses_Container">
        <ExpensesBar Currency={'₱'} Value={0}/>
    </div>
  )
}

export default ExpensesPage