import React from 'react';
import { useState } from 'react';
import Display from './Content/Display';
import Attribute from './Content/Attribute';
import PrintButton from './Content/PrintButton';
import masterList from './masterList';
import ModalPopUp from './ModalPopUp';

function Content() {
  const [skin,setSkin] = useState({
    description:"Skin",
    choices:masterList.skin.type[0],
    color:masterList.skin.colors[0],
    array:masterList.skin,
    index:0
  });

  const [weapon,setWeapon] = useState({
    description:"Weapon",
    choices:masterList.weapon.type[0],
    color:masterList.weapon.colors[0],
    array:masterList.weapon,
    index:0
  });

  const [shoes,setShoes] = useState({
    description:"Shoes",
    choices:masterList.shoes.type[0],
    color:masterList.shoes.colors[0],
    array:masterList.shoes,
    index:0
  });

  const [eyes,setEyes] = useState({
    description:"Eyes",
    choices:masterList.eyes.type[0],
    color:masterList.eyes.colors[0],
    array:masterList.eyes,
    index:0
  });

  const [clothes,setClothes] = useState({
    description:"Clothes",
    choices:masterList.clothes.type[0],
    color:masterList.clothes.colors[0],
    array:masterList.clothes,
    index:0
  });

  const [decoration,setDecoration] = useState({
    description:"Decorations",
    choices:masterList.decoration.type[0],
    color:masterList.decoration.colors[0],
    array:masterList.decoration,
    index:0
  });
  
  const [clickedButton,setClickedButton] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState("");
  var passedState = skin;//default skin
  var setPassedState = setSkin;
  if(clickedButton === "Skin"){
    passedState = skin;
    setPassedState = setSkin;
  }else if(clickedButton === "Weapon"){
    passedState = weapon; 
    setPassedState = setWeapon;
  }else if(clickedButton === "Shoes"){
    passedState = shoes;
    setPassedState = setShoes;
  }else if(clickedButton === "Eyes"){
    passedState = eyes;
    setPassedState = setEyes;
  }else if(clickedButton === "Clothes"){
    passedState = clothes;
    setPassedState = setClothes;
  }else if(clickedButton === "Decorations"){
    passedState = decoration;
    setPassedState = setDecoration;
  }
  return (
    <div className='container col-12 mw content-cont mb-5'>
      <Display/>
      <div className='attr-cont d-flex flex-column justify-content-between' style={{outline:"2px red solid"}}>
        <div>
          {/* skin */}
          <Attribute 
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={skin}
            set_state={setSkin}
            array={skin.array}
            setClickedButton={setClickedButton}
          />
          {/* weapon */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={weapon}
            set_state={setWeapon}
            array={weapon.array}
            setClickedButton={setClickedButton}
          />
          {/* shoes */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={shoes}
            set_state={setShoes}
            array={shoes.array}
            setClickedButton={setClickedButton}
          />
          {/* eyes */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={eyes}
            set_state={setEyes}
            array={eyes.array}
            setClickedButton={setClickedButton}
          />
          {/* clothes */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={clothes}
            set_state={setClothes}
            array={clothes.array}
            setClickedButton={setClickedButton}
          />
          {/* decorations */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={decoration}
            set_state={setDecoration}
            array={decoration.array}
            setClickedButton={setClickedButton}
          />
        </div>
        <div>
          <PrintButton/>
        </div>
      </div>  
      <ModalPopUp
        show={modalShow}
        onHide={() => setModalShow(false)} 
        modalContent = {modalContent}
        passedState={passedState}
        setPassedState={setPassedState}
      />
    </div>
  )
}
export default Content;