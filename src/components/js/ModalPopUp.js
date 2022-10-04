import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPopUp({show,onHide,modalContent,passedState,setPassedState,setDisplayState}) {
  var colors=[""];
  if(modalContent !== ''){
    colors=modalContent.split(" ");
  } 

  const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`;
  
  function changeButtonColor(e){
    var clickedColor = e.target.style.backgroundColor;
    clickedColor = rgba2hex(clickedColor);
    setPassedState(prevState =>{
      let data={...prevState};
      prevState.color = clickedColor;
      return data;
    });
    var temp = "display"+ passedState.description;
    console.log(temp);
    setDisplayState(prevState => {
      let data={...prevState};
      prevState[temp][1] = clickedColor;
      return data;
    });
  }

  return (<>
    <Modal
      {...{show,onHide}}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Colors
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div onClick={changeButtonColor}>
          { 
            colors.map(content=> { return <div onClick={onHide} key={content} style={{backgroundColor:content, width:"20px", height:"20px",display:"inline-block"}}></div>})
          }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </>);
}
export default ModalPopUp;