import React from 'react'
import Display from './Content/Display';
import Attribute from './Content/Attribute';

function Content() {
  return (
    <div className='container col-12 mw content-cont'>
      <Display/>
      <div className='attr-cont' style={{outline:"2px red solid"}}>
        <Attribute/>
        <Attribute/>
        <Attribute/>
        <Attribute/>
        <Attribute/>
        <Attribute/>
        <Attribute/>
        <Attribute/>
        <Attribute/>
      </div>  
    </div>
  )
}
export default Content;