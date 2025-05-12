import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DashboardStudent from './DashboardStudent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashboardStudent />
  </StrictMode>,
)
