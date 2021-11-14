import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event)=> {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter the text here');

    return (
        <div class="mb-3">
            <h1>{props.heading} </h1>
            <textarea className="form-control my-3" onChange={handleOnChange} value={text} id="mybox" rows="8"></textarea>
            <button className="btn btn-primary my-3" onClick={handleUpClick} >toUppercase</button>
        </div>
    )
}