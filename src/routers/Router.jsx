import React from 'react'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import LogIn from '../pages/LogIn'
import Books from '../pages/Books'
import BookDetails from '../pages/BookDetails'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'

export default function Router() {
    const router = createBrowserRouter([
        {path: '/', element: <Home/>},
        {path: '/SignUp', element: <SignUp/>},
        {path: '/LogIn', element: <LogIn/>},
        {path: '/Books', element: <Books/>},
        {path: '/BookDetails/:id', element: <BookDetails/>},
        {path: '/*', element: <Error/>}

    ])
  return (
    <RouterProvider router={router}/>
  )
}
