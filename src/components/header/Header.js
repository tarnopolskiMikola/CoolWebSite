import React from "react";
import "./header.css"


function Header(){
    return (
     
        <>
       <div className="header">
           <div className="header_block1">
               <div className="header_logo" id="header_logo"><img src="https://img.icons8.com/nolan/64/cyberpunk.png" alt="g"/></div>
               <div className="header_item1" id="header_item1"><img src="https://img.icons8.com/nolan/64/musical-notes.png" alt="f"/></div>
           </div>
         
               <div  className="header_bottom"><a id="header_bottom" className="header_bottom" href="/"> O</a></div>
               <div className="header_link">Link</div>
            
       </div>
        </>
      );
}
export default  Header;