import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import AppliedJobs from './Components/AppliedJobs';
import Blogs from './Components/Blogs';
import Statistics from './Components/Statistics';
import ErrorPage from './Components/ErrorPage';
import JobDetails from './Components/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/job',
        element: <Jobs></Jobs>
      },
      {
        path:'/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
