import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState(null);
  const navigate = useNavigate("");


  const handleSubmit = (e) => {
    e.preventDefault();
   if(localStorage.getItem('password') === password && localStorage.getItem('email') === email) {
        navigate('/Books');
      } else {
        setError('Wrong email or password');
        setEmail('');
        setPassword('');
    
  }};

  return (
    <div className="grid min-h-screen place-items-center">
    <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 className="text-xl font-semibold">LogIn Form</h1>
      <form className="mt-6">
        {err && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{err}</div>}
        <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="john.doe@company.com" autoComplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
        <input id="password"  value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="********" autoComplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        <button type="submit" onClick={handleSubmit} className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
          Log In 
        </button>
      </form>
    </div>
  </div>
  )
}
