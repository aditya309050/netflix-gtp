import { useState, useRef } from "react";
import Header from "./Header";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    
    // Automatically remove any accidental spaces at the beginning or end of the email
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value;

    // Validate email format
    const message = checkValidData(emailValue, passwordValue);
    if (message) {
      setErrorMessage(message);
      return;
    }

    // Firebase requires passwords to be exactly 6 characters or longer
    if (passwordValue.length < 6) {
      setErrorMessage("Password must be at least 6 characters (any letters or numbers).");
      return;
    }

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).catch((error) => {
             setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(() => {
          // Successfully Signed in 
        })
        .catch(() => {
          setErrorMessage("Invalid credentials. Please try again.");
        });
    }
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
      <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button 
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span className="text-white cursor-pointer hover:underline" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
