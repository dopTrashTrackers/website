import React from 'react'
import "../styles/loader.css"

function Loader({ width='100%', height='100%' }) {
  return (
    <div className="loader rounded-lg border border-gray-300 bg-white" style={{ width, height }}></div>
  )
}

export default Loader