import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CoffeeLandingPage from './CoffeeLandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeeLandingPage />
  </StrictMode>,
)
