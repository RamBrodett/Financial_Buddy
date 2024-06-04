import { useEffect, useState } from "react";
import SavingBar from "../components/SavingBar";
import SavingsCardContainer from "../components/SavingsCardContainer";
import SavingsButtonGroup from '../components/SavingsButtonGroup';
import SavingsTransactionCards from "../components/savingsTransactionCards";
import TrackingForm from "../components/TrackingForm";

const SavingsPage = () => {
  const [formType, setFormType] = useState(0)
  const [savings, setSavings] = useState(0);
  const [goalsCount, setGoalsCount] = useState(0);
  const [isSavingsFetched, setIsSavingsFetched] = useState(false);
  const [isFormsVisible, setFormVisibility] = useState(false)
  const [savingsTransactions, setSavingsTransactions] = useState([]);
  const [goals,setGoals] = useState([
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

    useEffect(()=>{
      fetchSavings();
    },[])

    const fetchSavings = async() => {
      try {
        console.log('fetched account savings');
        setSavings(186024);
        setIsSavingsFetched(true);
      } catch (error) {
        console.error('An error occured. ', error);
        
      }
    }

    const addGoal = (title, goalPrice) => {
        if (goalsCount < 8) {
            setGoalsCount(goalsCount + 1);
            setGoals([...goals, { title: title, goalPrice: goalPrice}]);
        }
    };

    const addSavings = (money, source) => {
      const moneyValue = parseFloat(money);
      if (moneyValue > 0) {
        setSavings(prevSavings => prevSavings + moneyValue);
        const currentDate = new Date().toLocaleDateString();
        const newTransaction = { value: moneyValue, source: source, date: currentDate };
        setSavingsTransactions(prevTransactions => [...prevTransactions, newTransaction]);
      }
    }

    const showForms = (whichForm) =>{
      if(whichForm === 1){
        setFormType(1);
        setFormVisibility(true);
      }else if(whichForm===2){
        setFormType(2);
        setFormVisibility(true);
      }else{
        setFormType(0);
        setFormVisibility(false);
      }
    }

  return (
    <div className="flex flex-col py-2 px-7 w-full" id="Savings_Container">
        <SavingBar Currency={'₱'} Value={savings}/>
        <div className="bg-slate-50 flex flex-col w-full h-[200px] rounded-md border border-4 mt-3 p-6">
          <span className="font-customFont font-bold text-xl md:text-4xl mb-4 text-color4">Goals</span>
          {isSavingsFetched ? <SavingsCardContainer location={0} currSavings={savings} goals={goals} /> : null}
        </div>
        <div className="bg-slate-50 flex flex-col w-full h-[47vh] rounded-md border border-4 mb-[20px] mt-3 p-6">
          <span className="font-customFont font-bold text-xl md:text-4xl z-10 pb-3">Savings Log</span>
          <div className="flex flex-col overflow-y-auto" id='transactionContainer'>
          {savingsTransactions.map((transaction, index) => (
            <SavingsTransactionCards key={index} value={transaction.value} source={transaction.source} date={transaction.date} />
          ))}
          </div>
        </div>
        <div className="flex justify-center w-full mb-[10px]">
          <SavingsButtonGroup showForms={showForms} />
        </div>
        {isFormsVisible ? (
          <div>
          {formType === 1 ? <TrackingForm type={1} showForms={showForms} addSavings={addSavings}/> : formType === 2 ? <GoalForm showForms={showForms} addGoal={addGoal} /> : null}
          </div>
        ): null
        }
    </div>
  )
}

export default SavingsPage