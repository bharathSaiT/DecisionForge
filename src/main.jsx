import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
      <React.StrictMode>
      {/* <Navbar/> */}
      <br/>
      <App/>
    </React.StrictMode>,
  </RecoilRoot>
    
)
