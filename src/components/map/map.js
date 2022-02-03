
import "./map.css";
import React, { useState, useEffect } from 'react';
import Hi from "./hi"

function Map(){
    const [count, setCount] = useState(0);
   
let st =  document.getElementById("parent");
let st2 =  document.getElementById("hi_block2");
let about =  document.getElementById("about");
 
    useEffect(() => {
        document.getElementById("mySidepanel").style.width = count+"%";
     
         console.log(count) ;
         if(count=== 50){
            document.getElementById("header_logo").style.color = "rgb(255, 44, 244)"
            document.getElementById("header_item1").style.color = "rgb(255, 44, 244)"
            st.style.left = "95%"
            st.style.top = "200px"
            st.style.width ="100px"
            st2.style.display = "block"
            about.style.color = "white"
            
         }
         if(count=== 100){
            document.getElementById("header_logo").style.color = "black"
            document.getElementById("header_item1").style.color = "black"
        
            st.style.left = "50%"
            st.style.top = "50%"
            st.style.width ="250px"
            about.style.color = "black"
            st2.style.display = "none"
             return  setCount(count - 100 )
         }
      });


      
    //   function closeNav() {
    //     document.getElementById("mySidepanel").style.width = "0";
    //   }



    return (
     
        <>
       
           <div className="parent"  >
             <div className="block"onClick={() => setCount(count + 50) }  id="parent">
             <img className="block_icon2" src="https://img.icons8.com/ios/200/000000/geography.png" alt="f"/>
           </div>
           </div>
           <div className="hi_block2" id="hi_block2"></div>
            <Hi />
            
             
        </>
      );
}
export default  Map;

 