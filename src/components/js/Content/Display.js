import React from 'react'
import template from '../../images/default.png';

function Display() {
  return (
    <div className='display' style={{ outline: "2px solid green" }}>
        <img src={template} alt=""/>
    </div>
  )
}
export default  Display;