import React from 'react'
import template from '../../images/PiskelTemplate.png';

function Display() {
  return (
    <div className='display' style={{ outline: "2px solid green" }}>
        <img src={template} />
    </div>
  )
}
export default  Display;