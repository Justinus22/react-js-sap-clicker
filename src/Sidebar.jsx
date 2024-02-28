import { useState } from "react";
import "./Sidebar.css"

export default function Sidebar(props) { 

    const [upgradeClickPrice, setUpgradeClickPrice] = useState(10)

    function upgradeClick(){
        if(props.revenue >= upgradeClickPrice){
            setUpgradeClickPrice((prevPrice) => {
                props.setRevenue(prevRev =>  prevRev - prevPrice)
                return prevPrice * 1.2
            })
            props.setClickMult(prev => prev*2)
        }   
        console.log("Not enough money!")
    }
    
    return (
      <div className='sidebarContainer'>
        <div className="title">
            Upgrades
        </div>
        <section className="upgrades">
            <div className="upgradeClick" onClick={upgradeClick}>
                Upgrade your click for: {upgradeClickPrice}
            </div>
        </section>
      </div>
    );
  }