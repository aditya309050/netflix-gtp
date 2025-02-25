import { useState } from "react";
import Header from "./Header";

const Login = () => {
  // State to track sign-in or sign-up form
  const [isSignInForm, setIsSignInForm] = useState(true);

  // Toggle between Sign In and Sign Up
  const toggleSignInForm = () => {
    setIsSignInForm((prevState) => !prevState);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
         {!isSignInForm && (
          <input
            type="text"
            placeholder="Phone no"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}


        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />

       {isSignInForm && (
        <input 
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
       )}
        

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        
        <p className="py-4">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span className="text-red-500 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
