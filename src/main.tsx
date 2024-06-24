import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartContextProvider } from './store/cart-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartContextProvider>
     <App />
    </CartContextProvider>
  </React.StrictMode>,
)
