import React from 'react'
import OfficeList from './OfficeList.jsx'
import CardSlider from './CardSlider.jsx'
import { AccordionCustomStyles } from './Accordion.jsx'
import Logos from './Logos.jsx'
import GarbageDetectionMap from './GarbageDetectionMap.jsx'
import Chat from './Chat.jsx'
import Modi from './Modi.jsx'


function Home() {
  return (
    <>
    <div className='flex flex-col w-full items-center justify-center min-h-screen gap-10 mb-10'>
    const images = [
    "https://via.placeholder.com/800x300",
    "https://via.placeholder.com/800x300/ff7f7f",
    "https://via.placeholder.com/800x300/50b3a2",
    "https://via.placeholder.com/800x300/d2a6ff",
  ];
      
      <Logos/>  
      <CardSlider/>
      <Modi/>
      <OfficeList/>
      <GarbageDetectionMap/>
      <AccordionCustomStyles/>
      <Chat/>
    </div>
    </>
  )
}

export default Home