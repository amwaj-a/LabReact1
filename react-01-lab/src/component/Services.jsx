import React from 'react'

function Services({service, price}) {
  return (
    <div className='company'>
      <span>Service:{service}</span>
<span>work Price: {price}</span></div>
  )
}

export default Services