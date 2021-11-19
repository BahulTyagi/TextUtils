import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=> {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <textarea className="form-control my-3" onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick} >toUppercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleLowClick} >toLowercase</button>
        </div>
        <div className="container my-3">
            <h4>Text Summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.08*text.length } seconds read</p>
            <p>{text}</p>
        </div>

        </>
    )
}