import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { useState } from 'react'

function App() {

  const [mode, setmode] = useState('light');

  const toggleMode = ()=>{
      if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor='grey';
        document.title='Text Utility : dark';
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='white';
        document.title='Text Utility : Light';
      }
      
  }

  return (
    <Router>
      <Navbar title="Textifier" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert="This is alert" />
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About></About>
          </Route>
           <Route exact path="/">
           <TextForm heading="Enter the text to modify :" />
          </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
