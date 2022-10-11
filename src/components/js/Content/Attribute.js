import React from "react";
import masterList from "../masterList";
// import { useState } from 'react';

function Attribute({
  modalState,
  setModalContent,
  currentState,
  set_state,
  array,
  setClickedButton,
}) {
  function modalOpen() {
    modalState(true);
    setModalContent(array.colors.join(" "));
    setClickedButton(currentState.description);
  }
  function changeTypeRight() {
    var index = currentState.index;
    index += 1;
    if (index === array.type.length) {
      index = 0;
    }
    set_state((prevState) => {
      let data = { ...prevState };
      data.index = index;
      data.choice = data.array.type[index];
      return data;
    });
  }
  function changeTypeLeft() {
    var index = currentState.index;
    index -= 1;
    if (index < 0) {
      index = array.type.length - 1;
    }
    set_state((prevState) => {
      let data = { ...prevState };
      data.index = index;
      data.choice = data.array.type[index];
      return data;
    });
  }

  function standardize_color(str) {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = str;
    return ctx.fillStyle;
  }

  function invertHex(hex) {
    var number = Number(`0x1${hex}`);
    var finalHex;
    if (number > 25198720) {
      //greater than gray then black
      finalHex = "000000";
    } else {
      //less than gray then white
      finalHex = "FFFFFF";
    }
    return finalHex;
  }

  var fontColor =
    "#" + invertHex(standardize_color(currentState.color).slice(1));

  var type_choices = (
    <div className="choices d-flex flex-fill align-items-center justify-content-between px-3">
      <div>
        <button onClick={changeTypeLeft}>
          <i className="bi bi-caret-left-fill"></i>
        </button>
      </div>
      <div>
        <div>{currentState.choice}</div>
      </div>
      <div>
        <button onClick={changeTypeRight}>
          <i className="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </div>
  );

  if (masterList[currentState.description.toLowerCase()].type.length == 1) {
    type_choices = (
      <div className="choices d-flex flex-fill align-items-center justify-content-center px-3">
        <div className="">
          <div>{currentState.choice}</div>
        </div>
      </div>
    );
  }
  var card_height = "";
  var button = (
    <div className="d-flex justify-content-center h-25">
      <button
        className="flex-fill mx-3 mb-1 btn rounded-0 border-2 border-dark btn-color"
        style={{ backgroundColor: currentState.color, color: fontColor }}
        onClick={modalOpen}
      >
        {String(currentState.color)}
      </button>
    </div>
  );
  if (currentState.choice == "None") {
    button = <div className="d-flex justify-content-center "></div>;
    card_height = "124px";
  }

  console.log("attribute", currentState.description);
  return (
    <>
      <div
        className="card-attr"
        style={{ outline: "2px green solid", height: card_height }}
      >
        <div className="card-attr-child d-flex flex-column">
          <div style={{ background: "#cc8fdb" }}>
            {currentState.description}
          </div>
          {type_choices}
          {button}
        </div>
      </div>
    </>
  );
}
export default Attribute;
