import React, {useState} from 'react'   


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
        
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied.","success");
    }


    const [text, setText] = useState('');
    // setText("new text"); //way of changing set text.

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#23384d'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your text here..." value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#23384d'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#23384d'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008* text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here..."}</p>
        </div>
        </>
       
        
        
    )
}
