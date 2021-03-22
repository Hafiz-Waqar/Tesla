import React from 'react'
import "./HeaderBlock.css"

function HeaderS() {
  return (
    <div className="headerS">
      <div className="headerBlock_info">
          <div className="headerBlock_infoText">
              <h1>Model 3</h1>
              <h4>
                Order Online for <span>Touchless Dilvery</span>
            </h4>
          </div>
          <div className="headerBlock_actions">
              <button className="headerBlock_buttonPrimary">Custom Order</button>
              <button className="headerBlock_buttonSecondary">Existing Inventory</button>
          </div> 
      </div>
    </div>
  )
}

export default HeaderS
