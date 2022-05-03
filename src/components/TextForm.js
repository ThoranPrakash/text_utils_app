import React,{useState} from 'react'

export default function TextForm(props) {

    function changeToUpperCase(){
        let newText = text.toUpperCase();
        setText(newText);
    }
    function changeToLowerCase(){
        let newText = text.toLowerCase();
        setText(newText);
    }
    function clearText(){
        let newText = '';
        setText(newText);
    }
    function handleOnChange(event){
        setText(event.target.value);
    }
    function clearExtraSpaces(){
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
    }
    function clearSymbols(){
        let newText = text.replace(/[^a-zA-Z ]/g, "");
        setText(newText);
    }
    const [text, setText] = useState('');
    return (
        <>
    <div className="container">
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
            color :props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="myTextBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={changeToUpperCase}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={changeToLowerCase}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={clearExtraSpaces}>Clear Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={clearSymbols}>Clear Symbols</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary </h2>
        <p>Your Text Has <b>{text===""? "0":text.trim().split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p>You can read the above text in <b>{0.008 * text.split(" ").length}</b> minutes</p>
        <h2>Preview</h2>
        <p>{text.length <1 ? "No text to preview" : text}</p>
    </div>
    </>
  )
}
