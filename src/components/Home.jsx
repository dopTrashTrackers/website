import React from 'react'
import OfficeList from './OfficeList.jsx'
import CardSlider from './CardSlider.jsx'
import { AccordionCustomStyles } from './Accordion.jsx'
import Logos from './Logos.jsx'
import GarbageDetectionMap from './GarbageDetectionMap.jsx'


function Home() {
  return (
    <>
    <div className='flex flex-col w-full items-center justify-center min-h-screen gap-10 mb-10'>
      <Logos/>  
      <CardSlider/>
      <OfficeList/>
      <GarbageDetectionMap/>
      <AccordionCustomStyles/>
      
    </div>
    </>
  )
}

export default Home