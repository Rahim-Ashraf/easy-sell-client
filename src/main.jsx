import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout/Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Provider from './Provider/Provider';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
  {
    path: "/login",
    element: <Login></Login>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
