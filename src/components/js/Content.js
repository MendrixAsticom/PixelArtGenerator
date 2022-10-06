import React from 'react';
import { useState } from 'react';
import Display from './Content/Display';
import Attribute from './Content/Attribute';
import PrintButton from './Content/PrintButton';
import masterList from './masterList';
import ModalPopUp from './ModalPopUp';
import RandomButton from './Content/RandomButton';


function Content() {
  const [skin,setSkin] = useState({
    description:"Skin",
    choice:masterList.skin.type[0],
    color:masterList.skin.colors[0],
    array:masterList.skin,
    index:0
  });
  const [weapon,setWeapon] = useState({
    description:"Weapon",
    choice:masterList.weapon.type[0],
    color:masterList.weapon.colors[0],
    array:masterList.weapon,
    index:0
  });

  const [shoes,setShoes] = useState({
    description:"Shoes",
    choice:masterList.shoes.type[0],
    color:masterList.shoes.colors[0],
    array:masterList.shoes,
    index:0
  });

  const [eyes,setEyes] = useState({
    description:"Eyes",
    choice:masterList.eyes.type[0],
    color:masterList.eyes.colors[0],
    array:masterList.eyes,
    index:0
  });

  const [clothes,setClothes] = useState({
    description:"Clothes",
    choice:masterList.clothes.type[0],
    color:masterList.clothes.colors[0],
    array:masterList.clothes,
    index:0
  });

  const [decoration,setDecoration] = useState({
    description:"Decoration",
    choice:masterList.decoration.type[0],
    color:masterList.decoration.colors[0],
    array:masterList.decoration,
    index:0
  });
  
  const [displayState,setDisplayState] =useState({
    displaySkin:[skin.choice,skin.color],
    displayWeapon:[weapon.choice,weapon.color],
    displayShoes:[shoes.choice,shoes.color],
    displayEyes:[eyes.choice,eyes.color],
    displayClothes:[clothes.choice,clothes.color],
    displayDecoration:[decoration.choice,decoration.color]
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
  }else if(clickedButton === "Decoration"){
    passedState = decoration;
    setPassedState = setDecoration;
  }
  return (
    <div className='container col-12 mw content-cont mb-5'>
      <Display displayState={displayState} passedState={passedState}/>
      <div className='attr-cont d-flex flex-column justify-content-between'>
        <div>
          {/* skin */}
          <Attribute 
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={skin}
            set_state={setSkin}
            array={skin.array}
            setClickedButton = {setClickedButton}
            setDisplayState = {setDisplayState}
          />
          {/* weapon */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={weapon}
            set_state={setWeapon}
            array={weapon.array}
            setClickedButton={setClickedButton}
            setDisplayState = {setDisplayState}
          />
          {/* shoes */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={shoes}
            set_state={setShoes}
            array={shoes.array}
            setClickedButton={setClickedButton}
            setDisplayState = {setDisplayState}
          />
          {/* eyes */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={eyes}
            set_state={setEyes}
            array={eyes.array}
            setClickedButton={setClickedButton}
            setDisplayState = {setDisplayState}
          />
          {/* clothes */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={clothes}
            set_state={setClothes}
            array={clothes.array}
            setClickedButton={setClickedButton}
            setDisplayState = {setDisplayState}
          />
          {/* decorations */}
          <Attribute
            modalState ={setModalShow}
            setModalContent={setModalContent}
            currentState={decoration}
            set_state={setDecoration}
            array={decoration.array}
            setClickedButton={setClickedButton}
            setDisplayState = {setDisplayState}
          />
        </div>
        <div className='d-flex flex-sm-row flex-column mx-5 mx-sm-0 justify-content-around py-4'>
          <div className="spacer"></div>
          <RandomButton 
            setSkin = {setSkin}
            setWeapon = {setWeapon}
            setShoes = {setShoes}
            setEyes = {setEyes}
            setClothes = {setClothes}
            setDecoration = {setDecoration}
            skin = {skin}
            weapon = {weapon}
            shoes = {shoes}
            eyes = {eyes}
            clothes = {clothes}
            decoration = {decoration}
            setDisplayState = {setDisplayState}
            
          />
          <PrintButton/>
          <div className="spacer"></div>
        </div>
      </div>  
      <ModalPopUp
        show={modalShow}
        onHide={() => setModalShow(false)} 
        modalContent = {modalContent}
        passedState={passedState}
        setPassedState={setPassedState}
        setDisplayState = {setDisplayState}
      />
    </div>
  )
}
export default Content;