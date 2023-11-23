import React, {useState} from 'react'

export default function Text(props) {
  const handleupClick = ()=>{

    
    var  newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success")
  }
  const handlelowClick =() =>{
    var newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert("converted to lowercase","success")
  }
  const handleonchange = (event) =>{

 
    setText(event.target.value)
    
  }
  const clearClick = () =>{
    var newText=''
    setText(newText)
    props.showAlert("text cleared","success")
  }
    const [text,setText] = useState('')
// setText('new text')
  return (
    <>
     <div className='container' style ={{ color: props.mode==='dark'?'white':'black'}} >
   
    <div className="mb-3"  >
    {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
      <h1 >{props.heading}</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleonchange} value={text} style={{backgroundColor: props.mode==='dark'?'#080639':'white',color:props.mode==='dark'?'white':'black'}}> </textarea>
          </div>
           <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleupClick}>Convert to uppercase</button>
         <button type="button" className="btn btn-primary" onClick={handlelowClick}>Convert to lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={clearClick}>Clear</button>
           </div>
  <div className="container my-3" style ={{ color: props.mode==='dark'?'white':'black'}}>
    <h1>your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word {text.length} characters </p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes word read</p>
  <h2>preview</h2>
  <p>{text.length>0?text:"enter something to preview"}</p>
  </div>
 

    </>
     
    
  )
}
