import SavingBar from "../components/SavingBar";
import ExpensesBar from "../components/ExpensesBar";
import ProgressBar from "../components/ProgressBar";
import NotesBar from "../components/NotesBar";
import { useState } from "react";

const Dashboard = () => {
  const [savings, setSavings] = useState(186024);
  const [goals] = useState([
    {
      title: 'Macbook Pro M3 Pro',
      goalPrice: 186000,
    },
    {
      title: '8bit do Retro Keyboard',
      goalPrice: 3200,
    },
    {
      title: 'Mx Master 3s',
      goalPrice: 5290
    }
    ]);
  return (
    <div className="flex flex-col py-2 px-7 h-full" id="Dashboard_Container">
      <div className="flex flex-col" id="section1">
        <SavingBar Currency={'₱'} Value={savings}/>
        <div className="m-1"></div> {/* DIVIDER */}
        <ExpensesBar Currency={'₱'} Value={0}/>
      </div>
      <div className="flex-grow flex flex-row mb-[20px]" id="section2">
        <ProgressBar currSavings={savings} goals={goals}/>
        <div className="m-1"></div> {/* DIVIDER */}
        <NotesBar />
      </div>
    </div>
  )
}

export default Dashboard