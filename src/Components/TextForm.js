import React, { useState } from 'react'

export default function TextForm(props) {
    const countWords = (text) => {
         const arr = text.split(/\s+/);

  return arr.filter(word => word !== '').length;
        
    }
    const handleUpClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase();

        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success")
    }
    const handleLowClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toLowerCase();

        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleClearClick = () => {
        // console.log("uppercase was clicked")
        let newText = '';

        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    const handleExtraSpace = () => {
        // console.log("uppercase was clicked")
        let newText = text.replace(/\s+/g, ' ').trim();

        setText(newText)
        props.showAlert("Extra space removed!","success")
    }
    
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
      <>
      <div className='container'  style={{color: props.mode ==='dark'?'white':'black'}} >
          <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3">
  
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#7a8ccc': 'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra spaces</button>
          </div>
          <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
              <h2>your text summary</h2>
              <p>{countWords(text)} words  and {text.length} characters</p>
              <p>{0.008 * text.split(" ").filter(word => word !== '').length} minutes read </p>
              <h2>Preview</h2>
              <p>{text.length>0?text: "Nothing to preview!"}</p>
          </div>
      </>
  )
}
