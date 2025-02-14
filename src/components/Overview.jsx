import React from 'react'
import './Common.css'

const Overview = () => {
  return (
    <div className="market-overview">
  <h2>Global Market Overview</h2>
  <div className="market-stats">
    <div className="stat-item">
      <h3>Market Cap</h3>
      <p>$1.2 Trillion</p>
    </div>
    <div className="stat-item">
      <h3>24h Volume</h3>
      <p>$120 Billion</p>
    </div>
    <div className="stat-item">
      <h3>Bitcoin Dominance</h3>
      <p>45.8%</p>
    </div>
  </div>
</div>

  )
}

export default Overview

