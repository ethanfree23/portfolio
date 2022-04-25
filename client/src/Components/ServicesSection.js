import React from 'react'

function ServicesSection({ image, title }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
          <img className="service-img" src={image} alt="" />
          <h5 className="s-title">{title}</h5>
          <p className="s-text">
            I can enchance your customer's experience with your brand through beautiful design, at a fraction of the market rate.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection;