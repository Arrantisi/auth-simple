import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColorTheme } from './common/ColorTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorTheme>
      <App />
    </ColorTheme>
  </StrictMode>,
)
