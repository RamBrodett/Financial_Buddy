import {useEffect, useState} from "react";
const LogReg = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  //Create a hook here to check for cookies if there is no cookies login or register page


  if(loggedIn){
    location.href = 'http://localhost:5173/dashboard';
  }

  return (
    <div className="flex justify-center items-center flex flex-col h-screen">
      <div className="w-2/3 min-h-96 m-auto my-96 bg-color1 relative rounded-xl shadow-logregShadow">
        <div 
          className="sign-up-container 
            absolute top-0 h-full transition-all 
            duration-75 ease-in-out
            left-0 w-1/2 z-10 opacity-0">
          <form action="">
            <h1>Create Account</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password"/>
            <button 
              className="py-3 px-11 rounded-3xl border
              border-color3 font-bold
              bg-color3 text-color1
              active:scale-95 tracking-wider
              focus:outline-none">Sign up</button>
          </form>
        </div>
        <div 
          className="sign-in-container
            absolute top-0 h-full transition-all 
            duration-75 ease-in-out
            left-0 w-1/2 z-20">
            <h1>Sign in</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button 
              className="py-3 px-11 rounded-3xl border
              border-color3 font-bold
              bg-color3 text-color1
              active:scale-95 tracking-wider
              focus:outline-none">Sign in</button>
        </div>
        <div className="overlaycontainer">
          <div className="overlay">
            <div className="overlayPanel-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlayPanel-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogReg;