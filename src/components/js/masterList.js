import React from "react";

function masterList() {
  const masterList = {
    skin: {
      colors: [
        "#f2bec7",
        "#562b08",
        "#dff6ff",
        "#ca955c",
        "#efef90",
        "#ffffff",
        "#8a7a7a",
      ],
      type: ["default"],
    },
    weapon: {
      colors: [
        "#0000ff",
        "#4b0082",
        "#ffa500",
        "#ee82ee",
        "#ffffff",
        "#D7D114",
      ],
      type: ["None", "Ghost", "Stinger", "Vandal"],
    },
    shoes: {
      colors: [
        "#00ffff",
        "#000000",
        "#0000ff",
        "#008000",
        "#4b0082",
        "#ffa500",
        "#800080",
        "#ff0000",
        "#ee82ee",
        "#ffff00",
      ],
      type: ["None", "High_Cut", "Low_Cut"],
    },
    eyes: {
      colors: [
        "#000000",
        "#ffa500",
        "#4b0082",
        "#ff0000",
        "#ee82ee",
        "#ffffff",
        "#ffff00",
      ],
      type: ["default", "Shades_1", "Shades_2"],
    },
    clothes: {
      colors: [
        "#ffffff",
        "#0000ff",
        "#008000",
        "#4b0082",
        "#ff0000",
        "#8f00ff",
        "#ffff00",
      ],
      type: ["Tank_Top", "Coat", "Shirt"],
    },
    decoration: {
      colors: [
        "#0000ff",
        "#4b0082",
        "#ffa500",
        "#ff0000",
        "#8f00ff",
        "#ffffff",
        "#ffff00",
      ],
      type: ["None", "Buttons", "Shirt_Print"],
    },
  };
  return masterList;
}
export default masterList();
