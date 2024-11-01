import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement : <Error></Error>,
    children:[
      {
        path : "/",
        element : <Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
