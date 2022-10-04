import React from 'react'

function Gpath({attr,type,color}) {
    
    
    console.log(color);
    var defaultTemp = <g
                    transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                    fill="black"
                    stroke="none"
                >
                    <path d="M1100 2450 l0 -150 -50 0 -50 0 0 -50 0 -50 -150 0 -150 0 0 -350 0 -350 50 0 50 0 0 -50 0 -50 150 0 150 0 0 -50 0 -50 50 0 50 0 0 -150 0 -150 -100 0 -100 0 0 -150 0 -150 150 0 150 0 0 50 0 50 -50 0 -50 0 0 50 0 50 50 0 50 0 0 50 0 50 50 0 50 0 0 50 0 50 200 0 200 0 0 -50 0 -50 50 0 50 0 0 -150 0 -150 150 0 150 0 0 50 0 50 -50 0 -50 0 0 100 0 100 -50 0 -50 0 0 100 0 100 -50 0 -50 0 0 100 0 100 150 0 150 0 0 150 0 150 -50 0 -50 0 0 200 0 200 -100 0 -100 0 0 250 0 250 -400 0 -400 0 0 -150z m700 -200 l0 -250 100 0 100 0 0 -150 0 -150 50 0 50 0 0 -100 0 -100 -100 0 -100 0 0 -50 0 -50 -50 0 -50 0 0 -50 0 -50 -300 0 -300 0 0 100 0 100 -200 0 -200 0 0 300 0 300 250 0 250 0 0 50 0 50 -100 0 -100 0 0 50 0 50 50 0 50 0 0 100 0 100 300 0 300 0 0 -250z" />
                </g>;
    var skin = <g
                    transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                    fill={color}
                    stroke="none"
                >
                    <path d="M1200 2400 l0 -100 -50 0 -50 0 0 -50 0 -50 100 0 100 0 0 -50 0 -50 -250 0 -250 0 0 -300 0 -300 200 0 200 0 0 -100 0 -100 300 0 300 0 0 50 0 50 50 0 50 0 0 50 0 50 100 0 100 0 0 100 0 100 -50 0 -50 0 0 150 0 150 -100 0 -100 0 0 250 0 250 -300 0 -300 0 0 -100z" />
                </g>
    var defaultEyes = <g
                      transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                      fill={color}
                      stroke="none"
                    >
                      <path d="M1400 2250 l0 -50 100 0 100 0 0 -50 0 -50 50 0 50 0 0 50 0 50 100 0 100 0 0 50 0 50 -250 0 -250 0 0 -50z" />
                    </g>;

    var shades_1 = <g
                    transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                    fill={color}
                    stroke="none"
                  >
                    <path d="M1400 2200 l0 -100 100 0 100 0 0 50 0 50 50 0 50 0 0 -50 0 -50 100 0 100 0 0 100 0 100 -250 0 -250 0 0 -100z" />
                  </g>;

    var shades_2 =<>
                  <g
                    transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                    fill={color}
                    stroke="none"
                  >
                    <path d="M1400 2200 l0 -100 100 0 100 0 0 50 0 50 50 0 50 0 0 -50 0 -50 100 0 100 0 0 50 0 50 -50 0 -50 0 0 50 0 50 -100 0 -100 0 0 -50 0 -50 -50 0 -50 0 0 50 0 50 -50 0 -50 0 0 -100z"></path>
                  </g>
                  <g
                  transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                  fill="gray"
                  stroke="none"
                >
                  <path d="M1500 2250 l0 -50 50 0 50 0 0 50 0 50 -50 0 -50 0 0 -50z"></path>
                  <path d="M1800 2250 l0 -50 50 0 50 0 0 50 0 50 -50 0 -50 0 0 -50z"></path>
                </g>
              </>;
  
    var shirt = <g
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                fill={color}
                stroke="none"
              >
                <path d="M800 1950 l0 -150 250 0 250 0 0 -50 0 -50 100 0 100 0 0 -100 0 -100 -150 0 -150 0 0 -100 0 -100 300 0 300 0 0 50 0 50 50 0 50 0 0 200 0 200 50 0 50 0 0 100 0 100 -300 0 -300 0 0 50 0 50 -300 0 -300 0 0 -150z"></path>
              </g>
  
    var coat =<>
              <g
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                fill={color}
                stroke="none"
              >
                <path d="M800 1800 l0 -300 200 0 200 0 0 50 0 50 100 0 100 0 0 -100 0 -100 -100 0 -100 0 0 -50 0 -50 300 0 300 0 0 50 0 50 50 0 50 0 0 150 0 150 50 0 50 0 0 150 0 150 -300 0 -300 0 0 50 0 50 -300 0 -300 0 0 -300z"></path>
              </g>
              <g
                transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                fill="#3d4144"
                stroke="none"
              >
                <path d="M1500 1700 l0 -300 100 0 100 0 0 300 0 300 -100 0 -100 0 0 -300z"></path>
              </g>
            </> 
    var tankTop = <g
                  xmlns="http://www.w3.org/2000/svg"
                  transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                  fill={color}
                  stroke="none"
                >
                  <path d="M1300 1900 l0 -200 100 0 100 0 0 -100 0 -100 -150 0 -150 0 0 -100 0 -100 300 0 300 0 0 50 0 50 50 0 50 0 0 300 0 300 -250 0 -250 0 0 50 0 50 -50 0 -50 0 0 -200z"></path>
                </g>

    var buttons = <g
                  xmlns="http://www.w3.org/2000/svg"
                  transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                  fill={color}
                  stroke="none"
                >
                  <path d="M1600 1850 l0 -50 50 0 50 0 0 50 0 50 -50 0 -50 0 0 -50z"></path>
                  <path d="M1600 1650 l0 -50 50 0 50 0 0 50 0 50 -50 0 -50 0 0 -50z"></path>
                  <path d="M1600 1450 l0 -50 50 0 50 0 0 50 0 50 -50 0 -50 0 0 -50z"></path>
                </g>

    var shirtPrint = <g
                      xmlns="http://www.w3.org/2000/svg"
                      transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                      fill={color}
                      stroke="none"
                    >
                      <path d="M1500 1750 l0 -250 100 0 100 0 0 -50 0 -50 -150 0 -150 0 0 -50 0 -50 200 0 200 0 0 150 0 150 -100 0 -100 0 0 150 0 150 50 0 50 0 0 -100 0 -100 50 0 50 0 0 150 0 150 -150 0 -150 0 0 -250z"></path>
                    </g>

    var highShoes = <>
                    <g
                      xmlns="http://www.w3.org/2000/svg"
                      transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                      fill={color}
                      stroke="none"
                    >
                      <path d="M1000 750 l0 -50 150 0 150 0 0 50 0 50 -150 0 -150 0 0 -50z"></path>
                      <path d="M1900 750 l0 -50 150 0 150 0 0 50 0 50 -150 0 -150 0 0 -50z"></path>
                    </g>
                    <g
                      xmlns="http://www.w3.org/2000/svg"
                      transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                      fill="gray"
                      stroke="none"
                    >
                      <path d="M1000 850 l0 -50 100 0 100 0 0 50 0 50 -100 0 -100 0 0 -50z"></path>
                      <path d="M1900 850 l0 -50 100 0 100 0 0 50 0 50 -100 0 -100 0 0 -50z"></path>
                    </g>
                  </>
    var lowShoes =<g
                  xmlns="http://www.w3.org/2000/svg"
                  transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                  fill={color}
                  stroke="none"
                >
                  <path d="M1000 750 l0 -50 150 0 150 0 0 50 0 50 -150 0 -150 0 0 -50z"></path>
                  <path d="M1900 750 l0 -50 150 0 150 0 0 50 0 50 -150 0 -150 0 0 -50z"></path>
                </g>
    var vandal = <g
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                fill={color}
                stroke="none"
              >
                <path d="M1500 1750 l0 -50 -50 0 -50 0 0 -100 0 -100 50 0 50 0 0 50 0 50 50 0 50 0 0 -50 0 -50 50 0 50 0 0 50 0 50 100 0 100 0 0 50 0 50 -100 0 -100 0 0 50 0 50 -100 0 -100 0 0 -50z"></path>
              </g>
    var ghost = <g
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                fill={color}
                stroke="none"
              >
                <path d="M1400 1600 l0 -100 50 0 50 0 0 50 0 50 100 0 100 0 0 50 0 50 -150 0 -150 0 0 -100z"></path>
              </g>
    var stinger = <g
                  xmlns="http://www.w3.org/2000/svg"
                  transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)"
                  fill={color}
                  stroke="none"
                >
                  <path d="M1500 1750 l0 -50 -50 0 -50 0 0 -100 0 -100 50 0 50 0 0 50 0 50 50 0 50 0 0 -50 0 -50 50 0 50 0 0 50 0 50 50 0 50 0 0 50 0 50 -100 0 -100 0 0 50 0 50 -50 0 -50 0 0 -50z"></path>
                </g>

    var passedGpath="";
    if (attr !== "none"){
        if (attr == "skin"){
            passedGpath = skin;
        }
        else if(attr == "eyes"){
            if(type == "default"){
                passedGpath = defaultEyes;
            } else if(type == "Shades_1"){
                passedGpath = shades_1;
            } else if(type == "Shades_2"){
                passedGpath = shades_2;
            }
        }
        else if (attr == "clothes"){
            if(type == "Tank_Top"){
                passedGpath = tankTop; 
            }else if(type == "Coat"){
                passedGpath = coat;
            }else if(type == "Shirt"){
                passedGpath = shirt;
            }
        }
        else if(attr == "decoration"){
            if(type == "none"){
                passedGpath=<></>;
            }else if(type == "Buttons"){
                passedGpath = buttons;
            }else if(type == "Shirt_Print"){
                passedGpath = shirtPrint;
            }
        }
        else if(attr == "shoes"){
            if(type == "none"){
                passedGpath = <></>;
            }else if (type == "High_Cut"){
                passedGpath = highShoes;
            }else if (type =="Low_Cut"){
                passedGpath = lowShoes;
            }
        }
        else if(attr == "weapon"){
            if(type == "Vandal"){
                passedGpath = vandal;
            }else if(type == "Stinger"){
                passedGpath = stinger;
            }else if(type == "Ghost"){
                passedGpath = ghost;
            }
        }

    }
    else{
        passedGpath= defaultTemp;
    }
  return (
    <>{passedGpath}</>
  );
}
export default Gpath;