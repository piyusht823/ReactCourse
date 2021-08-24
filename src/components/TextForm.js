import React, {useState} from 'react'   


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    // setText("new text"); //way of changing set text.

    return (
        <>
        <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your text here..." value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
        
    )
}
// 