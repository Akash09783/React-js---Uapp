import React, {useState} from 'react'

export default function Textform(props) {
    const handleupclick = (event)=>{
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = (event)=>{
        console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearclick = (event)=>{
        console.log("Uppercase was clicked"+ text);
        let newText = '';
        setText(newText)
    }
    const handleonChange = (event)=>{
        console.log("onChange")
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (

    <>
    <div className="container"/>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',Color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary mx-2"onClick={handleupclick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2"onClick={handleLoclick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2"onClick={handleClearclick}>Clear text</button>
    
    <div className="container m-3"  style={{backgroundColor:props.mode==='dark'?'grey':'black'}} >
        <h1>Your text summary</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes reads</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
