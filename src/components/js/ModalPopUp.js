import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalPopUp({ show, onHide, modalContent, setPassedState }) {
  var colors = [""];
  if (modalContent !== "") {
    colors = modalContent.split(" ");
  }

  const rgba2hex = (rgba) =>
    `#${rgba
      .match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/)
      .slice(1)
      .map((n, i) =>
        (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n))
          .toString(16)
          .padStart(2, "0")
          .replace("NaN", "")
      )
      .join("")}`;

  function changeButtonColor(e) {
    var clickedColor = e.target.style.backgroundColor;
    clickedColor = rgba2hex(clickedColor);
    console.log("changeButtonColor", clickedColor);
    setPassedState((prevState) => {
      let data = { ...prevState };
      data.color = clickedColor;
      return data;
    });
  }
  console.log("ModalPopUP");
  return (
    <>
      <Modal
        {...{ show, onHide }}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Colors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap gap-2" onClick={changeButtonColor}>
            {colors.map((content) => {
              return (
                <div
                  className="modal-color"
                  onClick={onHide}
                  key={content}
                  style={{ backgroundColor: content }}
                ></div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalPopUp;
