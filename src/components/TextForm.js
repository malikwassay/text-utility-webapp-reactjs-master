import React, { useState } from 'react'
import PropTypes from 'prop-types'




export default function TextForm(props) {
    
    const [text, setText] = useState('Enter text here');


    

    const handleUCCLick = ()=>{
        console.log("Upper case clicked!");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.setAlertMessage("Converted to Uppercase!" , "success");
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    
    const handleLCCLick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.setAlertMessage("Converted to Lowercase!" , "success");
    }
    
    const handleSpeakCLick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.setAlertMessage("Converted to Speech!" , "success");
    }



    return (
    <>
    <div style={{marginBlockStart : '100px'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
            <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={handleOnChange} id='myBox' rows={10} ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUCCLick}>Covert to Uppercase</button>    

        <button className="btn btn-primary mx-3" onClick={handleLCCLick}>Covert to Lowercase</button> 

        <button className="btn btn-primary my-3" onClick={handleSpeakCLick}>Speak</button> 

    </div>

    <div className="container my-3">

        <h3>Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>

    </div>

    </>
  )
}


TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};

TextForm.defaultProps = {
    heading: "Enter the text"
};
