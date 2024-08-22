import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProviderWrapper } from './contexts/auth.context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProviderWrapper>
      <Router>
        <App />
      </Router>
    </AuthProviderWrapper>

  </StrictMode>,
)
