import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {

  const [mode, setmode] = useState('light');

  const toggleMode = ()=>{
      if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor='grey';
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='white';
      }

  }

  return (
    <>
      <Navbar title="Textifier" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
    <div class="container">
    <TextForm heading="Enter the text to modify :" />
    {/* <About></About> */}
    </div>
    </>
  );
}

export default App;
