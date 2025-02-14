import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className='footer'>© {currentYear}. All Rights Reserved. </div>
  )
}

export default Footer