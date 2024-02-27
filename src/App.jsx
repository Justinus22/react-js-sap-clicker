import { useState } from 'react'
import ClickButton from './ClickButton'
import './App.css'

function App() {
  const [revenue, setRevenue] = useState(0)
  return (
      <div className='main'>
        <h1 className='title'>SAP Clicker</h1>

        <ClickButton setRevenue={setRevenue} className="button"></ClickButton>
        <div className='sidebar'>Sideabr</div>
        <div className='display'>
          Einnahmen: {revenue}
        </div>
      </div>
  )
}

export default App
