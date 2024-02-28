import { useState } from 'react'
import ClickButton from './ClickButton'
import Sidebar from './Sidebar'
import './App.css'

function App() {
  const [revenue, setRevenue] = useState(0)
  const [clickMult, setClickMult] = useState(1)
  return (
      <div className='main'>
        <h1 className='title'>
          <p className='titleTextContainer'>
            SAP Clicker
          </p>
        </h1>
        <div className="button">
          <ClickButton setRevenue={setRevenue} clickMult={clickMult}></ClickButton>
        </div>
        <div className='sidebar'>
          <Sidebar setClickMult={setClickMult} revenue={revenue} setRevenue={setRevenue}/>
        </div>
        <div className='display'>
          Einnahmen: {revenue}
        </div>
      </div>
  )
}

export default App
