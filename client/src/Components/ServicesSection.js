import React from 'react'

function ServicesSection({ image }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <img className="service-img"src={image} />
        <h5 className="s-title"></h5>
        <p className="s-text">
          I can enchance your customer's experience with your brand through beautiful design, at a fraction of the market rate.
        </p>
      </div>
    </div>
  )
}

export default ServicesSection;