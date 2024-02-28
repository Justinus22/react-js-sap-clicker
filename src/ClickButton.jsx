import React from 'react';
import "./ClickButton.css"

export default function ClickButton(props) {
  

  function buttonClicked(){
    props.setRevenue((prevRevenue) => prevRevenue+props.clickMult)
  }
  
  return (
    <div className='buttonContainer'>
       <img src="logo.png"  className='logo' alt="SAP" onClick={buttonClicked} />
    </div>
  );
}