 
import "./skill.css"
import {tsParticles} from "tsparticles";
import React, {  useEffect } from 'react';
import Header from "../header/Header"
import Icon from "../icon/icon"
 
 
function Skills(){
    // const particlesInit = (main) => {
    //     console.log(main);
    //   };
    
    //   const particlesLoaded = (container) => {
    //     console.log(container);
    //   };

      useEffect(() => {
     let logo = document.getElementById("header_logo") ;
     let item = document.getElementById("header_item1") ;
      if(window.location.href === "http://localhost:3000/skill"){
         logo.style.color = "white";
         item.style.color = "white";
      }


      tsParticles.load("tsparticles", {
        fpsLimit: 60,
        background: {
          color: "#0b032d"
        },
        backgroundMode: {
          enable: true
        },
        particles: {
          color: {
            value: ["#f67e7d", "#843b62", "#621940"]
          },
          links: {
            color: "#ffb997",
            enable: true
          },
          move: {
            enable: true,
            speed: 2
            
          },
          size: {
            value: 5,
            random: {
              enable: true,
              minimumValue: 1
            },
            animation: {
              enable: true,
              speed: 2.5,
              minimumValue: 1
            }
          },
          opacity: {
            value: 0.8,
            random: {
              enable: true,
              minimumValue: 0.4
            }
          }
        }
      });



    });



    return (
     
        <>
      
      <Header />

        <div className="Skills">
        <div className="Skills_block1">

        <div className="Skills_block1-flex">
        <img  className="Skills_block1-flex-img" src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-game-development-game-development-icongeek26-outline-gradient-icongeek26.png" alt="h"/>
        <img className="Skills_block1-flex-img" src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-game-game-development-icongeek26-outline-colour-icongeek26-1.png" alt="g"/>
        <img className="Skills_block1-flex-img" src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/000000/external-game-mobile-user-interface-tulpahn-outline-color-tulpahn.png" alt="h"/>

        </div>
        <h1 className="skills-p"> Game:</h1>
        <p className="skills-p">
        A fighting game like The King of Fighters '98:
         Ultimate Match Final Edition or Tekken 7 will
          do you good. In short, the PC gaming space is
           deep and varied. Don't get frozen by choice, 
           though; use this guide to help you make a swift
            and wise purchasing decision.
        </p>
        </div>
        <div className="Skills_block2">
    
                  <p className="skills-p2"> Video Play</p>
            <video width="100%" height="100%" controls>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
            </video>
        </div>
        </div>
        
          
           <Icon/>



 
        </>
      );
}
export default  Skills;