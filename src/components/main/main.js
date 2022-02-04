 
import "./main.css"
import Icon from '../icon/icon';
import Map from '../map/map';
import Header from '../header/Header';
 
import React, { useState, useEffect } from 'react';
 
function Main(){
  
  // function sayHi( w) {
  //   if(w === 100){
  //     const ok = document.getElementById("header_bottom") ;
  //   ok.classList.add("backInDown")
  //   }

    
  // }
  
  // setTimeout(sayHi, 1000, 100);
  
    useEffect(() => {
       
   
    
 
       
      });
    return (
     
        <>
         <Header />
    <Icon />
    <Map />
        <a id="about" className="about" href="/about">About.</a>
        <a className="work" href="/work">Work</a>
        <a className="skill" href="/skill">Skill.</a>
        </>
      );
}
export default  Main;