import React from 'react'
import {Header, Footer} from './index.js'
import OfficeList from './OfficeList.jsx'
import { AddPostOffice } from './index.js'

function Home() {
  return (
    <>
    <div className='flex flex-col w-full'>
      <Header/>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-900 via-green-700 to-green-900">
        <OfficeList/>
      </div>
      <Footer/>
    </div>
    {/* <AddPostOffice/> */}
    </>
  )
}

export default Home