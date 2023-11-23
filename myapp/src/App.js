

import { useState } from 'react';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Alert from './components/Alert';
// import About from './components/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

  
// } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#080639'
      showAlert("dark mode has been enabled","success")
      document.title="textUtils-Dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
      document.title="textUtils-light mode"

    }
  }
  const showAlert =(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null);
    

    },2000 )

  }
  return (
    <>
    <Navbar title="Textutils" about="Aboutus" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <Text heading="enter the text" mode={mode} showAlert={showAlert}/>
    {/* <Router>
   <Navbar title="Textutils" about="Aboutus" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container">
   <Routes>
          <Route exact  path="/about"element={<About mode={mode}/>}/>
           
          
          <Route exact path="/" element={<Text heading="enter the text" mode={mode} showAlert={showAlert}/>}/>
          
        
          </Routes>
  
 
  
   </div>
   </Router> */}

    </>
   
  );
}

export default App;
