import React from 'react';
import "./ClickButton.css"

export default function ClickButton(props) {
  

  function buttonClicked(){
    props.setRevenue((prevRevenue) => prevRevenue+1)
  }
  
  return (
    <div>
       <img src="logo.png"  className='logo' alt="SAP" onClick={buttonClicked} />
    </div>
  );
}

// Log to console
console.log('Hello console')