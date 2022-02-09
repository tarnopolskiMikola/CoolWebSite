 
import "./about.css"
import Header from '../header/Header';
 
import {tsParticles} from "tsparticles";
import React, {  useEffect } from 'react';
import Icon from "../icon/icon"
function About(){
   /* ---- tsParticles config ---- */

   useEffect(() => {
   
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
            <Header/>
            <Icon />

            <div className="aboutBlock">
           <p className="aboutBlock_P">We offer top-notch end-to-end Game Development 
             and Game Art Outsourcing services. </p>
                 <p className="aboutBlock_P"> 
             Our team of
              industry veterans will be glad to create your 
              project from scratch, may you need an addictive
               mobile title or a AAA project for  From inception,
                through concepting and prototyping to release and
                 post release support</p>
                
            <video width="100%" height="50%" controls>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
            </video>
             
            </div>
             

            <div className="aboutBlock2">
            <img className="aboutBlock2" src="https://o.remove.bg/downloads/251256aa-5af4-4efa-b65d-e67b5767fe99/2-removebg-preview.png" alt=""></img>
            </div>
 
           
 

        
   
       
        </>
      );
}
export default  About;