import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React,{useState} from 'react';

function App() {
  const [code,setCode]=useState("");
  const [fil,setfil]=useState("");
  const [output,SetOutput]=useState("");
  
 
  const generatefile=async ()=>{
    const payload={
      language:"java",
      code
    
    }
    try{
      console.log();
    const {data}=await axios.post("http://localhost:5000/run",payload);
    setfil(data);
     console.log(data);
    //  console.log();
   
  
}catch(err){
  console.log(err);

}};


const handlesubmit=async ()=>{
  const payload={
    language:"java",
    code
  
  }
  try{
    console.log();
  const {data}=await axios.post("http://localhost:5000/runn",payload);
  SetOutput(data);
   console.log(data);
  //  console.log();
 

}catch(err){
 // const {data}=err;
 
 SetOutput(err);
console.log(`${err}`,"eeeeeeeeeeeeeeeeeeeeeeeeeeee");

}};
// const handlesubmit = async () => {
//   const payload = {
//     language: "java",
//     code,
//   };
//   try {
//     const response = await axios.post("http://localhost:5000/runn", payload);
//     SetOutput(response.data);
//     console.log(response.data);
//   } catch (error) {
//     if (error.response) {
//       SetOutput(error.response.data); // Set the error message as the output
//     } else if (error.request) {
//       SetOutput("No response received from the server");
//     } else {
//       SetOutput("An error occurred during the request");
//     }
//     console.log(error.config);
//   }
// };

React.useEffect(() => {
  console.log(output);
}, [output]);
  return (
    <div className="App" >
       {/* <br /> */}
    <h1>
      Coding is On.....
    </h1> 
    <textarea  rows="15" cols="65" value={code} onChange={(e)=>{
      setCode(e.target.value)}}>
     

    </textarea>
    <br /><br />
      <button onClick={generatefile}>
        Save 
      </button> <br />
      {/* <p>File name :</p> */}
      <p color='red' className="filename">file name :   <b> {fil}</b></p>
      <br />
      {/* <br /> */}
      {/* <br /> */}
      
      <button onClick={handlesubmit}>
        Output
      </button> 
      {/* <p>Y</p> */}
      {/* <p>OUTPUT:</p> */}
      <p  className=" out">OUTPUT:   <b> {output}</b></p>
    </div>
  );
}

export default App;
