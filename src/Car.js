import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import "./Car.css"

function Car({ imgSrc, model, testDrive }) {
    return (
      <div className='car'>
        <div className='car_image'>
          <img src={imgSrc} alt={model} />
        </div>
        <h2 className='car_model'>{model}</h2>
        <div className='car_actions'>
          <ButtonPrimary name='order' />
          {testDrive && <ButtonSecondary name='test drive' />}
        </div>
        <p className='car_info'>
          <span>Request a Call</span> to speak with a product specialist, value
          your trade-in or apply for leasing
        </p>
      </div>
    )
  }

export default Car
