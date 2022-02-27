 
import "./main.css"
import Icon from '../icon/icon';
import Map from '../map/map';
import Header from '../header/Header';
 
import React, { useState, useEffect } from 'react';
 
function Main(){

 
  
    useEffect(() => {
       
   
    
 
       
      });
    return (
     
        <>
         <Header />
    <Icon />
    <Map />
        <a id="about" className="about" href="/about">About.</a>
        <a className="work" href="/work">Work</a>
        <a className="coment" href="/coment">Coment.</a>
        <a className="skill" href="/skill">Game.</a>
         
        </>
      );
}
export default  Main;