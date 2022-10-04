import React from 'react'
import Gpath from './Gpath'
function TemplateSVG({attr,type,color}) {    
  return (
    <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version={1.0}
            width="320.000000pt"
            height="320.000000pt"
            viewBox="0 0 320.000000 320.000000"
            preserveAspectRatio="xMidYMid meet"
            style={{ maxWidth: 320, maxHeight: 320 }}
        >
            <Gpath attr={attr} type={type} color={color} />
        </svg>  
    </>
  );
}
export default TemplateSVG;