import React from 'react'
import {Header, Footer} from './index.js'
import OfficeList from './OfficeList.jsx'
import { AddPostOffice } from './index.js'
import CardSlider from './CardSlider.jsx'
import { AccordionCustomStyles } from './Accordion.jsx'
function Home() {
  return (
    <>
    <div className='flex flex-col w-full items-center justify-center min-h-screen gap-10 mb-10'>
      <CardSlider/>
      <OfficeList/>
    </div>
    <div className='w-3/4 ml-40'>
       <div className='p-4'>
         <h2 style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#61C0BF' }}>
          Frequently Asked Questions
       </h2>

     <AccordionCustomStyles/>
     </div>
   </div>
    {/* <AddPostOffice/> */}
    </>
  )
}

export default Home