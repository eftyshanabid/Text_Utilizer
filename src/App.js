import TextUtiliser from './components/TextUtiliser';
import Navbar from './components/Navbar';
import React, { useState } from 'react';

function App() {

  const [text, setText] = useState('');

  //textarea onChange func
  const txtAreaHandler = (e)=>{
    setText(e.target.value);
  }

  //UpperCase onClick func
  const TxtUpHandler = ()=>{
    let txt = text.toUpperCase();
    setText(txt);
  }
  //TxtLo onClick func
  const txtLoHandler =()=>{
    let txt = text.toLowerCase();
    setText(txt);
  }
  //txtClear func
  const  txtClearHandler=()=>{
    setText('');
  }
  //copyToClipboard func
  const copyToClipboard=()=>{
    navigator.clipboard.writeText(text);
  }
  
  return (
    <>
    <Navbar/>
    <div className="container my-5"><h3>Enter Text Here :</h3></div>
    <TextUtiliser text={text}  TxtUpHandler={TxtUpHandler} txtAreaHandler={txtAreaHandler} txtLoHandler={txtLoHandler}
     txtClearHandler={txtClearHandler} copyToClipboard={copyToClipboard}/>
    </>
  );
}

export default App;
