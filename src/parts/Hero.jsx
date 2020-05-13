import React from 'react'

import Button from "elements/Button"
import { numberFormat } from "utils/NumberFormat"

import imageHero from "assets/images/picture.jpg"
import imageFrame from "assets/images/frame.jpg"
import icCities from 'assets/icons/ic_cities.svg'
import icTravel from 'assets/icons/ic_travel.svg'
import icTreasure from 'assets/icons/ic_treasure.svg'

export default function Hero(props) {

  function showMostPicked(){
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    })
  }

  return (
    <section className="container mt-5">
      <div className="row">

        <div className="col-6 align-items-center">
          <h1 className="font-weight-bold line-height-1 mb-3 color-primary">
            Forget Busy Work, <br/>Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vel aspernatur rerum voluptas accusantium excepturi aliquid animi reprehenderit a facilis?
          </p>

          <Button className="btn px-5 mb-5" isPrimary hasShadow onClick={showMostPicked}>
            Show Me Now
          </Button>

          <div className="row mt-5">
            
            <div className="col-auto">
              <img 
                src={icTravel} 
                alt={`${(props.data.travelers)} travelers`} 
                width="36" height="36"
              />
              <h6 className="mt-2">
                {numberFormat(props.data.travelers)} 
                <span className="font-weight-light text-gray-500"> Travellers</span>
              </h6>
            </div>

            <div className="col-auto">
              <img 
                src={icTreasure} 
                alt={`${props.data.treasures} travelers`} 
                width="36" height="36"
              />
              <h6 className="mt-2">
                {numberFormat(props.data.treasures)} 
                <span className="font-weight-light text-gray-500"> Treasures</span>
              </h6>
            </div>


            <div className="col-auto">
              <img 
                src={icCities} 
                alt={`${props.data.cities} travelers`} 
                width="36" height="36"
              />
              <h6 className="mt-2">
                {numberFormat(props.data.cities)} <span className="font-weight-light text-gray-500"> Cities</span>
              </h6>
            </div>

          </div>

        </div>

        <div className="col-6 mt-5">
          <div className="image-hero">
            <img 
                className="img-fluid position-absolute" 
                src={imageHero} 
                alt="Vacation"
                style={{
                  margin: '-2.2rem 0 0 0',
                  zIndex: 1
                }}
              />

              <img 
                className="img-fluid position-absolute" 
                src={imageFrame} 
                alt="Frame Vacation"
                style={{
                  margin: '0 0 -1rem 2.5rem'
                }}
              />
          </div>
        </div>
      </div>
    </section>
  )
}
