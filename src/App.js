
 
import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/about/About'
import Main from './components/main/main';
import Skills from './components/skill/skills'
import Work from './components/work/work'
import Coment from './components/Coment/Coment'
import Preloader from "./components/preloader/preloader"
import {BrowserRouter , Routes, Route  } from 'react-router-dom';
 
function App() {
  const  [loading, setLoading] = useState(true)
  useEffect(() => {
       
       setTimeout(() =>{
          setLoading(false)
       }, 800)
     });
 
  return (
    <>
    
{loading===true?<Preloader/>
         : 
        <BrowserRouter>
        <Routes >
           <Route exact path="/" element={<Main />} />
           <Route  exact  path="/about" element={<About />} />
           <Route  exact  path="/skill" element={<Skills />} />
           <Route  exact  path="/work" element={<Work />} />
           <Route  exact  path="/coment" element={<Coment /> } />
        </Routes>
     </BrowserRouter> 


}
    </> 
  );
}

export default App;

 