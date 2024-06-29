import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ResultPage from './pages/ResultPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <App/>,
    children :
    [
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/questions",
        element:<QuestionPage/>
      },
      {
        path:"/resultpage",
        element:<ResultPage/>
      },
 
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
