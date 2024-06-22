import React from 'react';
import NavLogout from '../components/NavLogout';
import Booksinfo from '../pages/Booksinfo';
import { useParams } from 'react-router-dom';


export default function BookDetails() {
  const {id} = useParams();
  const book = Booksinfo.find((book) => book.id === id);
  return (
    <>
      <NavLogout/>
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 rounded shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={book.img}
              alt="image"
              className="mx-2 my-16 rounded h-[500px] w-[100%] object-cover"
            />
          </div>
          <div className="p-6 ">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              {book.title}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {book.author}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
             {book.summary}
            </p>
            <div className='flex justify-end	'>
            <button
                className="flex select-none items-end	 gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans  font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"> {`${book.Price} $`} </button>
            </div>
             
          </div>
        </div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
        />
      </div>
      <div className="flex items-center justify-center">
          <div className="text-sm text-gray-700 py-1">
              Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank"> Creative </a>.
          </div>
      </div>
    </>
  )
}
