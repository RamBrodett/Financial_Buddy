import {useEffect, useState} from "react";
import finManSVG from'../assets/SVG/FinancialBuddy.svg';

const LogReg = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [signingIn, setSiningIn] = useState(true);
  const [errorMessage, setErrorMessage]= useState('');

  //useEffect for checking cookies

  const [userData, setUserData] = useState({
    username: '',
    password: '',
    confirm_password: ''
  });
  const [userSignData, setUserSignData] = useState({
    username: '',
    password: '',
  });

  const resetAllForms = () => {
    setUserData({
      username:'',
      password:'',
      confirm_password:''
    });
    setUserSignData({
      username:'',
      password:''
    });
  }

  const handleButtonSwitch = () => {
    setSiningIn((prev) => !prev);
    setErrorMessage('');
    resetAllForms();

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (signingIn){
      setUserSignData((prevData) => ({
        ...prevData,
        [name]: value
      }));

    }else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value
      }));

    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage('');

    if (signingIn){
      console.log(userSignData);
      setUserSignData({
        username: '',
        password: '',
      });
      setLoggedIn(true);

      /**
       * if(username){
       * 
       *  if(password did not match with the account){
       *  
       *    setErrorMessage('username or password is wrong');
       * }else{
       *    setErrorMessage('username or password is wrong');
       * }
       */

    }else {
      //validation of credentials

      //get the availability of username

      const usernameAvailability = true //temporary

      if((userData.password === userData.confirm_password) && usernameAvailability){
        console.log(userData);
        setUserData({
          username: '',
          password: '',
          confirm_password:''
        });
        setSiningIn(true);
      }else if(userData.password !== userData.confirm_password){
        setUserData((prevData) => ({
          ...prevData,
          password: '',
          confirm_password:''
        }));
        setErrorMessage('passwords did not match');
      }else if(!usernameAvailability){
        setUserData((prevData) => ({
          ...prevData,
          username:''
        }));
        setErrorMessage('username already used');
      }
    }
  }


  //Create a hook here to check for cookies if there is no cookies login or register page


  if(loggedIn){
    location.href = 'http://localhost:5173/dashboard';
  }

  return (
    <div className=" flex justify-center items-center flex flex-col h-screen">
      <div 
        className="w-2/4 min-h-[450px] m-auto my-96 bg-color1 relative 
        rounded-xl shadow-logregShadow" id="container">
        <div 
          className="absolute top-[25px] h-full transition-all 
             left-0 w-1/2 z-20 overflow-hidden">
          <form 
            className="inherit flex flex-col 
            items-center justify-center
            py-0 px-12 h-full">
            <h1 className=" cursor-default font-extrabold font-customFont text-4xl mb-3">{signingIn ? ('Sign in'):('Create account')}</h1>
                <input 
                  className="bg-stone-200 py-3  px-3.5 my-2 w-full"
                  type="text" placeholder="Username" name="username" value={signingIn ? userSignData.username : userData.username} onChange={handleInputChange}/>
                <input
                  className="bg-stone-200 py-3  px-3.5 my-2 w-full"
                  type="password" placeholder="Password" name="password" value={signingIn ? userSignData.password : userData.password} onChange={handleInputChange}/>
                {signingIn ?(
                  <a className="text-slate-600 text-lg my-3.5" href="#">Forgot your password?</a>
                ):(
                  <input
                  className="bg-stone-200 py-3  px-3.5 mt-2 mb-4 w-full"
                  type="password" placeholder="Confirm Password" name="confirm_password" value={userData.confirm_password} onChange={handleInputChange} />
                )}
                <button 
                  className="py-3 px-11 rounded-3xl border
                  border-color3 font-bold
                  bg-color3 text-color1
                  active:scale-95 tracking-wider
                  focus:outline-none" onClick={handleSubmit}>{signingIn ? 'Sign in' : 'Sign up'}</button>

                <span className="mt-7 text-red-500">{errorMessage}</span>
          </form>
              
        </div>
        <div className="relative left-1/2 w-1/2 h-full overflow-hidden z-100 rounded-r-xl ">
          <div className="overlay bg-color3 text-color1 h-full bg-cover">
            <div className="absolute top-9 content-center items-center justify-center flex flex-col p-11">
              <h1 className="cursor-default font-bold text-5xl mb-3">
                {signingIn ? 'Welcome back!' : 'Hello, friend!'}</h1>
              <p className="mt-5 cursor-default font-regular font-customFont text-justify">
              {signingIn ? ('Your financial buddy is here to help you monitor your funds. Sign in to continue!'):
              ('Fill up the form with the correct details and Let your trusted financial buddy assist you. Create your account now!')}</p>
              <button className="m-auto bg-transparent 
               py-1 px-5 rounded-3xl border
               border-color1 font-bold
               bg-color3 text-color1
               active:scale-95 tracking-wider
               focus:outline-none mt-10" id="signIn" onClick={handleButtonSwitch}>{signingIn ? ('Sign up'):('Sign in')}</button>
               <img className="w-2/5 relative  ml-auto" src={finManSVG}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogReg;