import React from 'react';

function Attribute() {
  return (
    <div className='card-attr'>
      <div className='d-flex flex-column'>
        <div> Description </div>
        <div className="choices d-flex">
          <div>
            <button></button>
          </div>
          <div>
            <div>text</div>
          </div>
          <div>
            <button></button>
          </div>
        </div>
        <button> color </button>
      </div>
    </div>
  )
}
export default Attribute;