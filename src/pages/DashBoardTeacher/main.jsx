import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DashBoardTeacher from './DashBoardTeacher.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashBoardTeacher />
  </StrictMode>,
)
