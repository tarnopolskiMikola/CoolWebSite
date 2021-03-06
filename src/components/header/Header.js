import React, {useState, useEffect} from "react";
import "./header.css"
import styled, { keyframes } from 'styled-components'
import { motion } from "framer-motion"

 
const   Header = () =>{
    
    useEffect(() => {
       
   
 
       
    });
     const [shake, setShake] = useState(false);
 
    const animate = () => {
        var mySong = document.getElementById("mySong");
        var icon = document.getElementById("header_item1");
     
          if(mySong.paused){
            mySong.play();
            icon.classList.add("rotateInM");
        }else{
            mySong.pause();
            icon.classList.remove("rotateInM");
        }
        mySong.loop = true;   
 
    }
    
 
        
    return (
     
        <>
       <div className="header">
           <div className="header_block1">
               <div className="header_logo" id="header_logo"><img src="https://img.icons8.com/nolan/64/cyberpunk.png" alt="g"/></div>
             
              
               <div className="header_item1"   id="header_item1" onClick = {animate}     > 
               
               <audio id="mySong">
               <source src="./Doja.mp3" type="audio/mp3"/>
               </audio><img src="https://img.icons8.com/nolan/64/musical-notes.png" alt="f"/>

               </div>
                
                      
              

           </div>
         
               <div  className="header_bottom"><a id="header_bottom" className="header_bottom" href="/"> <img className="header_bottom" src="https://img.icons8.com/nolan/64/play-button-circled.png" alt="go"/></a></div>
               <div className="header_link"> ...............</div>
            
       </div>
        </>
      );
}
export default  Header;

// import React, { useState } from 'react';

// const AnimatedButton = () => {
    
//     const [shake, setShake] = useState(false);
    
//     const animate = () => {
        
//         // Button begins to shake
//         setShake(true);
        
//         // Buttons stops to shake after 2 seconds
//         setTimeout(() => setShake(false), 2000);
        
//     }
    
//     return(
//         <button onClick = {animate} className = {shake ? `shake` : null}>Click me</button>
//     );
    
// }

// export default AnimatedButton;