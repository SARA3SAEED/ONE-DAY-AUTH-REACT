import React from 'react';
import NavLogout from '../components/NavLogout';
import Booksinfo from '../pages/Booksinfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





export default function Books() {
  const [search, setSearch] = useState("");
  const bookfilter = Booksinfo.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
  const navigate = useNavigate();




  return (
    <>
        <NavLogout />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />

        <div className="max-w-2xl m-28 mx-auto">
        <form>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" onChange={(e)=>{setSearch(e.target.value)}} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." required />
                  <button type="submit"  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>
          <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      </div>


    <div className='flex flex-wrap'>
      {bookfilter.map((book, index) => (
      <div key={index} className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div  className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
          src={book.img}
          className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {book.title}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {book.Price}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {book.author}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button onClick={() => {
                                    if (localStorage.getItem("getstart") === null) {
                                      navigate(`/BookDetails/${book.id}`);
                                  } else {
                                      localStorage.removeItem("getstart");
                                      navigate("/LogIn");
                                  }
                                    }}
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          > View Details
          </button>
        </div>
      </div>
      ))};
        </div>
      <link rel="stylesheet" href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"/>
    </>
  )
}
