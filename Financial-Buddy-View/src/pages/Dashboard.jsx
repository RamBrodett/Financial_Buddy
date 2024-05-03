import SavingBar from "../components/SavingBar";
import ExpensesBar from "../components/ExpensesBar";
import ProgressBar from "../components/ProgressBar";
import NotesBar from "../components/NotesBar";

const Dashboard = () => {
  return (
    <div className="flex flex-col py-2 px-7 h-full" id="Dashboard_Container">
      <div className="flex flex-col" id="section1">
        <SavingBar Currency={'₱'} Value={13829.13}/>
        <div className="m-1"></div> {/* DIVIDER */}
        <ExpensesBar Currency={'₱'} Value={0}/>
      </div>
      <div className="flex-grow flex flex-row" id="section2">
        <ProgressBar />
        <div className="m-1"></div> {/* DIVIDER */}
        <NotesBar />
      </div>
    </div>
  )
}

export default Dashboard