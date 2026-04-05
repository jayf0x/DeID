import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Background } from './components/Background'
import {Home} from './Home'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-full max-h-fit overflow-hidden text-foreground relative">
        <Home />
        <Background />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)