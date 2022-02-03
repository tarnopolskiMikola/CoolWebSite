 
import "./work.css"
 
import Header from "../header/Header"
import Particles from "react-tsparticles";
import React, {  useEffect } from 'react';



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
        <h1 class="Workh1">Work</h1>
       
 
  <div className="block_icon1">
               <img src="https://img.icons8.com/color-glass/40/000000/github.png" alt="22"/>
               <img src="https://img.icons8.com/nolan/40/telegram-app.png" alt="22"/>
               <img src="https://img.icons8.com/fluency/40/000000/facebook-messenger--v2.png" alt="ok"/>
               <img src="https://img.icons8.com/nolan/40/youtube-squared.png" alt="ok"/>
             <div className="line2"></div>
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