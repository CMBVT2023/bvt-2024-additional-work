import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // This .StrictMode is what causes all of the warning in problem to appear, there is no reason to not use it just found it interesting since it was never mentioned in the other tutorials.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
