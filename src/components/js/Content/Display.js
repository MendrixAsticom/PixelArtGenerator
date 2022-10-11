import React from "react";
import TemplateSVG from "../TemplateSVG";

function Display(props) {
  var skinType = props.skin.choice;
  var skinColor = props.skin.color;
  var eyesType = props.eyes.choice;
  var eyesColor = props.eyes.color;
  var clothesType = props.clothes.choice;
  var clothesColor = props.clothes.color;
  var decorationType = props.decoration.choice;
  var decorationColor = props.decoration.color;
  var shoesType = props.shoes.choice;
  var shoesColor = props.shoes.color;
  var weaponType = props.weapon.choice;
  var weaponColor = props.weapon.color;
  console.log("Display");
  return (
    <>
      <div id="print-display">
        <div className="template">
          <TemplateSVG attr="none" type={"default"} color={"none"} />
        </div>

        <div className="template skin">
          <TemplateSVG attr={"skin"} type={skinType} color={skinColor} />
        </div>
        <div className="template eyes">
          <TemplateSVG attr={"eyes"} type={eyesType} color={eyesColor} />
        </div>
        <div className="template clothes">
          <TemplateSVG
            attr={"clothes"}
            type={clothesType}
            color={clothesColor}
          />
        </div>
        <div className="template cloth_decor">
          <TemplateSVG
            attr={"decoration"}
            type={decorationType}
            color={decorationColor}
          />
        </div>
        <div className="template shoes">
          <TemplateSVG attr={"shoes"} type={shoesType} color={shoesColor} />
        </div>
        <div className="template weapon">
          <TemplateSVG attr={"weapon"} type={weaponType} color={weaponColor} />
        </div>
      </div>
    </>
  );
}
export default Display;
