 
import "./skill.css"
import Particles from "react-tsparticles";
import React, {  useEffect } from 'react';


function Skills(){
    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

      useEffect(() => {
     let logo = document.getElementById("header_logo") ;
     let item = document.getElementById("header_item1") ;
      if(window.location.href === "http://localhost:3000/skill"){
         logo.style.color = "white";
         item.style.color = "white";
      }
    });



    return (
     
        <>
       <div className="header">
           <div className="header_block1">
               <div className="header_logo" id="header_logo">logo</div>
               <div className="header_item1" id="header_item1">|||||||</div>
           </div>
         
               <div className="header_bottom"><a  href="/">Q</a></div>
               <div className="header_link">Link</div>
            
       </div>


        <div className="Skills">
        <div className="Skills_block1"></div>
        <div className="Skills_block1"></div>
        </div>
        
          





               <div className="block_icon1">
               <img src="https://img.icons8.com/color-glass/40/000000/github.png" alt="22"/>
               <img src="https://img.icons8.com/nolan/40/telegram-app.png" alt="22"/>
               <img src="https://img.icons8.com/fluency/40/000000/facebook-messenger--v2.png" alt="ok"/>
               <img src="https://img.icons8.com/nolan/40/youtube-squared.png" alt="ok"/>
             <div className="line2"></div>
                  </div>

  
       <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "rgb(12, 3, 17)",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}

   
    />
        </>
      );
}
export default  Skills;