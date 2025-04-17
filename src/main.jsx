import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WizzyRoomLandingPage from './WizzyRoomLandingPage'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WizzyRoomLandingPage />
  </React.StrictMode>,
)
