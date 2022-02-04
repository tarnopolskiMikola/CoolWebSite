 
import "./work.css"
 
import Header from "../header/Header"
import Particles from "react-tsparticles";
import React, {  useEffect } from 'react';
import Icon from "../icon/icon"


function Work(){


    useEffect(() => {
        let logo = document.getElementById("header_logo") ;
        let item = document.getElementById("header_item1") ;
         if(window.location.href === "http://localhost:3000/work"){
            logo.style.color = "white";
            item.style.color = "white";
         }
       });
    return (
     
        <>
        
        <Header/>
       
       
        <Icon />
 

                  <h1 className="Workh11">Work</h1>

                  <div className="WorkBlock">

                  <div id="wok1" className="WorkBlock_b1"></div>
                  <div id="wok1"  className="WorkBlock_b1"></div>
                  <div id="wok2"  className="WorkBlock_b1"></div>
                  <div id="wok2"  className="WorkBlock_b1"></div>
                  <div id="wok3"  className="WorkBlock_b1"></div>
                  <div id="wok3"  className="WorkBlock_b1"></div>
                </div>
        
     <div className="work-block">

     </div>
  <Particles
      id="tsparticles"
    
      options={{
        background: {
            color: "#000"
          },
          detectRetina: false,
          fpsLimit: 30,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true
            }
          },
          particles: {
            color: {
              value: "#fff"
            },
            number: {
              density: {
                enable: true,
                area: 1080
              },
              limit: 0,
              value: 400
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 3.25,
                sync: false
              },
              random: {
                enable: true,
                minimumValue: 0.05
              },
              value: 1
            },
            shape: {
              type: "circle"
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5
              },
              value: 1
            }
          }
      }}
     />
  

        </>
      );
}
export default  Work;