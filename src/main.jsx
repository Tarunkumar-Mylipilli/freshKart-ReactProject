import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Header from './Components/Header'
import { AppProvider } from './Services/AppContext.jsx'
import { AuthProvider } from './Services/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Header />
          <div className="app-container">
            <App />
          </div>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
