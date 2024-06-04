import { useEffect, useState } from "react";
import SavingBar from "../components/SavingBar";
import SavingsCardContainer from "../components/SavingsCardContainer";
import SavingsButtonGroup from '../components/SavingsButtonGroup';
const SavingsPage = () => {
  const [savings, setSavings] = useState(0);
  const [goalsCount, setGoalsCount] = useState(0);
  const [isSavingsFetched, setIsSavingsFetched] = useState(false);
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

    const addSavings = (money) => {
      if (money > 0) setSavings(savings + money);
    }
  return (
    <div className="flex flex-col py-2 px-7 w-full" id="Savings_Container">
        <SavingBar Currency={'₱'} Value={savings}/>
        <div className="bg-slate-50 flex flex-col w-full h-[200px] rounded-md border border-4 mt-3 p-6">
          <span className="font-customFont font-bold text-xl md:text-4xl mb-4 text-color4">Goals</span>
          {isSavingsFetched ? <SavingsCardContainer location={0} currSavings={savings} goals={goals} /> : null}
        </div>
        <div className="bg-slate-50 flex flex-col w-full h-[47vh] rounded-md border border-4 mb-[20px] mt-3 p-6">
        </div>
        <div className="flex justify-center w-full mb-[10px]">
          <SavingsButtonGroup />
        </div>

    </div>
  )
}

export default SavingsPage