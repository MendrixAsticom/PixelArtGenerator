import React from "react";
function PrintButton() {
  function printDiv() {
    document.getElementsByTagName(
      "body"
    )[0].children[1].children[1].children[1].style.visibility = "hidden";
    document.getElementsByClassName(
      "attr-cont"
    )[0].children[0].children[5].style.display = "none";
    document.getElementsByClassName(
      "attr-cont"
    )[0].children[0].children[4].style.display = "none";
    document.getElementsByClassName("title")[0].style.visibility = "hidden";
    window.print();
    document.getElementsByTagName(
      "body"
    )[0].children[1].children[1].children[1].style.visibility = "visible";
    document.getElementsByClassName(
      "attr-cont"
    )[0].children[0].children[5].style.display = "";
    document.getElementsByClassName(
      "attr-cont"
    )[0].children[0].children[4].style.display = "";
    document.getElementsByClassName("title")[0].style.visibility = "visible";
  }
  console.log("printButton");
  return (
    <button
      className="btn btn-secondary rounded-0 btn-md px-5 border-2 border-dark print"
      onClick={printDiv}
    >
      Print
    </button>
  );
}
export default PrintButton;
