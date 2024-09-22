import React from 'react'
import Marquee from 'react-fast-marquee'
import "../styles/CardSlider.css"

const CardSlider = () => {
        return (
          <div id="slider" className="text-center w-11/12 md:w-3/4 rounded-md">
            <div className="mb-[50px]">
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-serif bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                <i>LiFE practices</i>
              </h1>
            </div>
      
            <div className="mb-[50px]">
              <Marquee speed={100} delay={0} className='p-4'>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-110" src="../../NoPlastic.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-110" src="../../SaveWater.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-125" src="../../SaveEnergy.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-110" src="../../SustainableFood.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-110" src="../../EcoFriendly.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-110" src="../../ReduceWaste.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-125" src="../../ReduceEWaste.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-110" src="../../Nosingleuseplastic.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-110" src="../../COP27.png" alt="" />
                </div>
                <div className="mx-8 relative rounded-lg shadow-lg overflow-hidden" style={{height:"180px"}}>
                  <img className="w-[150%] filter brightness-15 scale-110" src="../../AdoptHealthyLifestyle.png" alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        );
      };
      
export default CardSlider