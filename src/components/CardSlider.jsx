import React from 'react'
import Marquee from 'react-fast-marquee'

const CardSlider = () => {
        return (
          <div className="mt-[50px] text-center bg-white w-3/4 rounded-md">
            <div className="mb-[50px]">
              <h1 className="text-6xl font-serif bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                <i>LiFE practices</i>
              </h1>
            </div>
      
            <div className="mb-[50px]">
              <Marquee speed={100} delay={0}>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../NoPlastic.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../SaveWater.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../SaveEnergy.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../SustainableFood.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../EcoFriendly.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../ReduceWaste.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../ReduceEwaste.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../Nosingleuseplastic.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../COP27.png" alt="" />
                </div>
                <div className="mx-8">
                  <img className="w-[150%] filter brightness-15 shadow-lg" src="../../AdoptHealthyLifestyle.png" alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        );
      };
      
      
      
  


export default CardSlider