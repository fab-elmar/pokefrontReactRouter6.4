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
import Battle, { loader as battloader } from './routes/Battle';
import { AllPokes, Allloader } from './routes/AllPokes';
import { DetailedView, detailLoader } from './routes/DetailedView';

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
        path: "Pokemons",
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
        path: "Battle",
        element: <Battle />,
        errorElement: <ErrorPage />,
        loader: battloader
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
