import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
 RouterProvider,
} from "react-router-dom";
import create from './Main Copmonent/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='max-w-screen-xl font-serif mx-auto'>
  <RouterProvider router={create} />
  </div>
  </StrictMode>,
)
