import React from 'react'

function masterList() {

    const masterList = {
        skin:{
            colors:["#f2bec7","#562b08","#dff6ff","#ca955c","#efef90","#ffffff","#8a7a7a"],
            type:[""]
        },
        weapon:{
            colors:["#0000ff","#4b0082","#ffa500","#ee82ee","#ffffff","#ffff00"],
            type:["none","Ghost","Stinger","Vandal"]
        },
        shoes:{
            colors:["#00ffff","#000000","#0000ff","#008000","#4b0082","#ffa500","#800080","#ff0000","#ee82ee","#ffff00"],
            type:["none","High Cut","Low Cut"]
        },
        eyes:{
            colors:["#000000","#ffa500","#4b0082","#ff0000","#ee82ee","#ffffff","#ffff00"],
            type:["default","Shades_1","Shades_2"]
        },
        clothes:{
            colors:["#0000FF","#008000","#4b0082","#FF0000","#8F00FF","#ffffff","#FFFF00"],
            type:["Sando","Coat","T-shirt"]
        },
        decoration:{
            colors:["#0000ff","#4b0082","#ffa500","#ff0000","#8F00FF","#FFFFFF","#FFFF00"],
            type:["none","Buttons","Shirt-Print"]
        }
    };
    return (masterList);
}
export default masterList();