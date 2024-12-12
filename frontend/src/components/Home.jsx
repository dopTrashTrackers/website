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
  <Logos className="header-logo" />  
  <CardSlider className="card-slider" />
  <Modi />
  <OfficeList className="office-list" />
  <GarbageDetectionMap className="garbage-detection-map" />
  <AccordionCustomStyles />
  <Chat className="chat" />
</div>
    </>
  )
}

export default Home