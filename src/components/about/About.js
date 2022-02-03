 
import "./about.css"
import Header from '../header/Header';
import Particles2 from "react-tsparticles";
import React, {  useEffect } from 'react';
function About(){
   /* ---- tsParticles config ---- */
    
   useEffect(() => {
    let logo = document.getElementById("header_logo") ;
    let item = document.getElementById("header_item1") ;
     if(window.location.href === "http://localhost:3000/about"){
        logo.style.color = "white";
        item.style.color = "white";
     }
   });
  
    return (
     
        <>
            <Header/>
            <div className="block_icon1">
               <img src="https://img.icons8.com/color-glass/40/000000/github.png" alt="22"/>
               <img src="https://img.icons8.com/nolan/40/telegram-app.png" alt="22"/>
               <img src="https://img.icons8.com/fluency/40/000000/facebook-messenger--v2.png" alt="ok"/>
               <img src="https://img.icons8.com/nolan/40/youtube-squared.png" alt="ok"/>
             <div className="line2"></div>
                  </div>
            <Particles2
      id="tsparticles"
   
      options={{
        background: {
          color: "#000000"
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#b6b2b2"
            }
          },
          opacity: {
            value: 0.5211089197812949,
            random: false,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 8.017060304327615,
            random: true,
            animation: {
              enable: true,
              speed: 12.181158184520175,
              minimumValue: 0.1,
              sync: false
            }
          },
          lineLinked: {
            enable: false,
            distance: 150,
            color: "#c8c8c8",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outMode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detectOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "connect"
            },
            onClick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            connect: {},
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        detectRetina: true
      }}
       />
   
       
        </>
      );
}
export default  About;