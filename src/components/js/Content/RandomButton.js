import React from "react";
import masterList from "../masterList";

function RandomButton(props) {
  var skin_color_num =
    masterList[props.skin.description.toLowerCase()].colors.length;
  var skin_type_num =
    masterList[props.skin.description.toLowerCase()].type.length;
  var weapon_color_num =
    masterList[props.weapon.description.toLowerCase()].colors.length;
  var weapon_type_num =
    masterList[props.weapon.description.toLowerCase()].type.length;
  var shoes_color_num =
    masterList[props.shoes.description.toLowerCase()].colors.length;
  var shoes_type_num =
    masterList[props.shoes.description.toLowerCase()].type.length;
  var eyes_color_num =
    masterList[props.eyes.description.toLowerCase()].colors.length;
  var eyes_type_num =
    masterList[props.eyes.description.toLowerCase()].type.length;
  var clothes_color_num =
    masterList[props.clothes.description.toLowerCase()].colors.length;
  var clothes_type_num =
    masterList[props.clothes.description.toLowerCase()].type.length;
  var decoration_color_num =
    masterList[props.decoration.description.toLowerCase()].colors.length;
  var decoration_type_num =
    masterList[props.decoration.description.toLowerCase()].type.length;

  function randomize() {
    var skin_color =
      masterList.skin.colors[Math.floor(Math.random() * skin_color_num)];
    var weapon_color =
      masterList.weapon.colors[Math.floor(Math.random() * weapon_color_num)];
    var weapon_type =
      masterList.weapon.type[Math.floor(Math.random() * weapon_type_num)];
    var shoes_color =
      masterList.shoes.colors[Math.floor(Math.random() * shoes_color_num)];
    var shoes_type =
      masterList.shoes.type[Math.floor(Math.random() * shoes_type_num)];
    var eyes_color =
      masterList.eyes.colors[Math.floor(Math.random() * eyes_color_num)];
    var eyes_type =
      masterList.eyes.type[Math.floor(Math.random() * eyes_type_num)];
    var clothes_color =
      masterList.clothes.colors[Math.floor(Math.random() * clothes_color_num)];
    var clothes_type =
      masterList.clothes.type[Math.floor(Math.random() * clothes_type_num)];
    var decoration_color =
      masterList.decoration.colors[
        Math.floor(Math.random() * decoration_color_num)
      ];
    var decoration_type =
      masterList.decoration.type[
        Math.floor(Math.random() * decoration_type_num)
      ];

    props.setSkin((prevSkin) => {
      var data = { ...prevSkin };
      data.color = skin_color;
      return data;
    });
    props.setWeapon((prevWeapon) => {
      var data = { ...prevWeapon };
      data.color = weapon_color;
      data.choice = weapon_type;
      return data;
    });
    props.setShoes((prevShoes) => {
      var data = { ...prevShoes };
      data.color = shoes_color;
      data.choice = shoes_type;
      return data;
    });
    props.setEyes((prevEyes) => {
      var data = { ...prevEyes };
      data.color = eyes_color;
      data.choice = eyes_type;
      return data;
    });
    props.setClothes((prevClothes) => {
      var data = { ...prevClothes };
      data.color = clothes_color;
      data.choice = clothes_type;
      return data;
    });
    props.setDecoration((prevDecoration) => {
      var data = { ...prevDecoration };
      data.color = decoration_color;
      data.choice = decoration_type;
      return data;
    });
  }
  console.log("randomButton");
  return (
    <button
      onClick={randomize}
      className="btn btn-warning rounded-0 btn-md px-4 mb-3 mb-sm-0 border-2 border-dark random"
    >
      Randomize
    </button>
  );
}

export default RandomButton;
