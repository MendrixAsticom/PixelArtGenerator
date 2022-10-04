import React from 'react'
import TemplateSVG from '../TemplateSVG';

function Display({displayState,passedState}) {
  var skinType = displayState.displaySkin[0];
  var skinColor = displayState.displaySkin[1];
  var eyesType = displayState.displayEyes[0];
  var eyesColor = displayState.displayEyes[1];
  var clothesType = displayState.displayClothes[0];
  var clothesColor = displayState.displayClothes[1];
  var decorationType = displayState.displayDecoration[0];
  var decorationColor = displayState.displayDecoration[1];
  var shoesType = displayState.displayShoes[0];
  var shoesColor = displayState.displayShoes[1];
  var weaponType = displayState.displayWeapon[0];
  var weaponColor = displayState.displayWeapon[1];
  return (
    <>
      <div className='template' style={{ outline: "2px solid green" }}>
        <TemplateSVG attr="none" type={"default"} color={"none"}/>
      </div>
      
      <div className='template skin'>
        <TemplateSVG attr={"skin"} type={skinType} color={skinColor}/>
      </div>
      <div className='template eyes'>
        <TemplateSVG attr={"eyes"} type={eyesType} color={eyesColor}/>
      </div>
      <div className='template clothes'>
        <TemplateSVG attr={"clothes"} type={clothesType} color={clothesColor}/>
      </div>
      <div className='template cloth_decor'>
        <TemplateSVG attr={"decoration"} type={decorationType} color={decorationColor}/>
      </div>
      <div className='template shoes'>
        <TemplateSVG attr={"shoes"} type={shoesType} color={shoesColor}/>
      </div>
      <div className='template weapon'>
        <TemplateSVG attr={"weapon"} type={weaponType} color={weaponColor}/>
      </div>
    </>
  )
}
export default  Display;