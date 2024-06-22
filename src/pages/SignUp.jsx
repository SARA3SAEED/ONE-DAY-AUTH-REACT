
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';



export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[ err , setError ] = useState(null);
  const navigate = useNavigate("");

  const emailRegex = /^((?:(?:(?:[a-zA-Z0-9][\.\-\+_]?)*)[a-zA-Z0-9])+)\@((?:(?:(?:[a-zA-Z0-9][\.\-_]?){0,62})[a-zA-Z0-9])+)\.([a-zA-Z0-9]{2,6})$/;

  var minNumberofChars = 6;
  var maxNumberofChars = 16;
  var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const validateForm = (event) => {
    event.preventDefault();
    if (name.length < 4) {
      setError('Name must be at least 4 characters long.');
      return false;
    }

    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return false;
    }

    if (password.length < minNumberofChars || password.length > maxNumberofChars) {
      setError('Password must be between'+ minNumberofChars +'and'+ maxNumberofChars +'characters.');
      return false;
    }
    
    if (!regularExpression.test(password)) {
      setError('Password must contain at least one number and one letter.');
      return false;
    }
  
     localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setError(null);
    navigate("/Login");
  };
  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        {err && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{err}</div>}
          <h1 className="text-xl font-semibold">Hello there ?, <span className="font-normal">please fill in your information to continue</span></h1>
          <form className="mt-6">
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label htmlFor="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="firstname" 
                type="text" 
                name="firstname" 
                placeholder="John" 
                autoComplete="given-name" 
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
              </span>
              <span className="w-1/2">
                <label htmlFor="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
              <input id="lastname" type="text" name="lastname" placeholder="Doe" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
              </span>
            </div>
            <label htmlFor="email"  className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input id="email"  value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="john.doe@company.com" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}  type="password" name="password" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label htmlFor="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
            <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <button type="submit" onClick={validateForm} className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
              Sign up
            </button>
            <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"><Link to="/LogIn">Already registered?</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}
