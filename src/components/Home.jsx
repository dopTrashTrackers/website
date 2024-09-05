import React from 'react'
import {Header, Footer} from './index.js'
import OfficeList from './OfficeList.jsx'
import { AddPostOffice } from './index.js'
import CardSlider from './CardSlider.jsx'

function Home() {
  return (
    <>
    <div className='flex flex-col w-full items-center justify-center min-h-screen gap-10 mb-10'>
      <CardSlider/>
      <OfficeList/>
    </div>
    {/* <AddPostOffice/> */}
    </>
  )
}

export default Home