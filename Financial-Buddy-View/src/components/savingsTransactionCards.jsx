
const savingsTransactionCards = ({value, source, date}) => {
  return (
    <div className=" flex flex-row items-center bg-color1 h-[50px] shrink-0 shadow-md pl-4 pr-4 mt-2 mb-2">
        <p className="text-xs lg:text-lg">Added:   <span className="ml-[1vw] text-xs lg:text-lg">₱{value}</span></p>
        <p className="ml-[20vw] text-xs lg:text-lg">Date: {date}</p>
        <p className="ml-[20vw] text-xs lg:text-lg">Source: <span className="ml-[1vw] text-xs lg:text-lg">{source}</span> </p>
    </div>
  )
}

export default savingsTransactionCards