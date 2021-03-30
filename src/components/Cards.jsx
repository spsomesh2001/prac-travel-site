import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

import im9 from "../images/img-9.jpg"
import im2 from "../images/img-2.jpg"
import im3 from "../images/img-3.jpg"
import im4 from "../images/img-4.jpg"
import im8 from "../images/img-8.jpg"

function Cards() {
  return (
    <div className="cards">
      <h1>Check out thes Epic Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src={im9}
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
            />
            <CardItem 
            src={im2}
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src={im3}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={im4}
              text='Experience Football on Top of the Himaliyan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={im8}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
