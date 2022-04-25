import React from 'react'

function Title({ title, span }) {
  return (
    <div className="Title">
      <h3>
        {title}
        <span>{title}</span>
      </h3>
    </div>
  )
}

export default Title