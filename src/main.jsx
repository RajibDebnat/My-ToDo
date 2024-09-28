import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContenxtProvider from './components/createTask page/TodoContenxt.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <TodoContenxtProvider>
        <App />
        </TodoContenxtProvider>

  </StrictMode>,
)
