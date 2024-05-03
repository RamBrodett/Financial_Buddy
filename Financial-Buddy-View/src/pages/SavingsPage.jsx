import SavingBar from "../components/SavingBar"
const SavingsPage = () => {
  return (
    <div className="flex flex column py-2 px-7" id="Savings_Container">
        <SavingBar Currency={'₱'} Value={13829.13}/>
    </div>
  )
}

export default SavingsPage