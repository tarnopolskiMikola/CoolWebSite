import React from "react";
import "./hi.css";
 
 

function Hi(){
    return (
     
        <>
         
         <div id="mySidepanel" className="sidepanel">
     
                   <div className="hi_block1">
                       <h1 className="hi_hello">Hello,</h1>
                       <p className="hi_text">We are geme company </p>
                       <p className="hi_text2">To do this tutorial you'll need a working React app. </p>
                   </div>
               
         
               <div className="block_icon1">
               <img src="https://img.icons8.com/color-glass/40/000000/github.png" alt="22"/>
               <img src="https://img.icons8.com/nolan/40/telegram-app.png" alt="22"/>
               <img src="https://img.icons8.com/fluency/40/000000/facebook-messenger--v2.png" alt="ok"/>
               <img src="https://img.icons8.com/nolan/40/youtube-squared.png" alt="ok"/>
             <div className="line2"></div>
                  </div>
            </div>

     
        </>
      );
}
export default  Hi;