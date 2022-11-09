import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './index.css'
import ErrorPage from './components/error-page';
import Root from './routes/Root';
import Hero from './routes/Hero'
import { AllPokes, Allloader } from './routes/AllPokes';
import { DetailedView, detailLoader } from './routes/DetailedView';
import Fight from './routes/Fight';
import { fightLoader } from './routes/Fight';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />
      },

      {
        path: "Pokemon",
        element: <AllPokes />,
        loader: Allloader
      },
      {
        path: "Pokemon/:id",
        element: <DetailedView />,
        errorElement: <ErrorPage />,
        loader: detailLoader
      },
       {
        path: "Pokemon/fight",
        element: <Fight />,
        errorElement: <ErrorPage />,
        loader: fightLoader
      }
    ]
  }
]

);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
