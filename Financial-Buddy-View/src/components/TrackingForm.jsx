import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import { useState } from 'react';

const TrackingForm = ({type,showForms, addSavings}) => {
  const [moneyValue, setMoneyValue] = useState('');
  const [source, setSource] = useState('');

  const handleMoneyChange = (event) => {
    setMoneyValue(event.target.value);
  };
  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleAddSavings = () => {
    addSavings(moneyValue, source);
    showForms(0); // Close the form after adding savings
  };
  return (
    <div className="
        fixed
        content-center
        top-0
        left-0
        h-full
        w-full
        bg-[rgba(0,0,0,.2)]
        z-10">
            <div className="
            bg-slate-50
            p-8
            md:w-[25vw]
            md:h-[49vh]
            w-[70vw]
            xm:min-h-[55vh]
            m-auto
            rounded-lg
            drop-shadow-lg">
                {type===1 ?(
                    <div className="flex flex-col items-center">
                        <span
                            className="text-color4 
                            font-bold
                            text-2xl lg:text-3xl self-center mb-[30px]">Add Savings</span>
                            <form className='flex flex-col items-center'>
                                <input
                                className='bg-slate-50
                                rounded-md border border-4
                                md:w-[15vw]
                                md:h-[8vh]
                                w-[40vw]
                                p-3
                                text-center
                                md:text-xl
                                text-base
                                '
                                 type="number" value={moneyValue} onChange={handleMoneyChange} name='moneyVal'placeholder='Enter value here' />
                                 <textarea
                                    className='bg-slate-50
                                    rounded-md border border-4
                                    md:w-[15vw]
                                    w-[40vw]
                                    min-h-[8vh]
                                    max-h-[18vh]
                                    mt-[20px]
                                    p-3
                                    text-center
                                    text-base
                                    md:text-xl'
                                    type="text" value={source} onChange={handleSourceChange} name='moneyVal'placeholder='Source of Money' />
                            </form>
                            <div className='flex flex-row space-x-4  mt-5'>
                                <Button className='w-[20vw] md:w-[9vw] lg:w-[5vw]' 
                                sx={{backgroundColor:'#FF6961',
                                "&:hover": {
                                    backgroundColor: '#FF6961', 
                                    boxShadow: 'none'
                                  }
                                }} variant="contained"
                                onClick={()=> showForms(0)}>Cancel</Button>
                                <Button className='w-[20vw]  md:w-[9vw] lg:w-[5vw]'
                                sx={{backgroundColor:'#48A843', 
                                "&:hover": {
                                    backgroundColor: '#48A843', 
                                    boxShadow: 'none'
                                  }}} variant="contained"
                                  onClick={handleAddSavings}
                                  >Add</Button>
                            </div>

                    </div>

                ):(
                    <div className="flex flex-col items-center">
                        <span
                            className="text-color4 
                            font-bold
                            text-2xl lg:text-3xl self-center mb-[30px]">Add Expenses</span>
                            <form className='flex flex-col items-center'>
                                <input
                                className='bg-slate-50
                                rounded-md border border-4
                                md:w-[15vw]
                                md:h-[8vh]
                                w-[40vw]
                                p-3
                                text-center
                                md:text-xl
                                text-base
                                '
                                 type="number" name='moneyVal'placeholder='Enter value here' />
                                 <textarea
                                    className='bg-slate-50
                                    rounded-md border border-4
                                    md:w-[15vw]
                                    w-[40vw]
                                    min-h-[8vh]
                                    max-h-[18vh]
                                    mt-[20px]
                                    p-3
                                    text-center
                                    text-base
                                    md:text-xl'
                                    type="text" name='moneyVal'placeholder='Description' />
                            </form>
                            <div className='flex flex-row space-x-4  mt-5'>
                                <Button className='w-[20vw] md:w-[9vw] lg:w-[5vw]' 
                                sx={{backgroundColor:'#FF6961',
                                "&:hover": {
                                    backgroundColor: '#FF6961', 
                                    boxShadow: 'none'
                                  }
                                }} variant="contained"
                                onClick={()=> showForms(0)}>Cancel</Button>
                                <Button className='w-[20vw]  md:w-[9vw] lg:w-[5vw]'
                                sx={{backgroundColor:'#48A843', 
                                "&:hover": {
                                    backgroundColor: '#48A843', 
                                    boxShadow: 'none'
                                  }}} variant="contained">Add</Button>
                            </div>

                    </div>
                )}
            </div>
    </div>
  )
}

TrackingForm.propTypes ={
    type: PropTypes.number,
    showForms: PropTypes.func,
    addSavings: PropTypes.func,
};

export default TrackingForm