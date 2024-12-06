import React from 'react'
import "../styles/loader.css"

function Loader({ width='100%', height='100%' }) {
  return (
    <div className="loader bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" style={{ width, height }}></div>
  )
}

export default Loader