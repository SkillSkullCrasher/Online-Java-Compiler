// console.log("hello world");


const cors=require("cors");
const express=require('express');
const fs=require("fs")

const {executeJava}=require("./executeJava");

const {generateFile}=require('./generatefile');
const { error } = require("console");
// const {filename} =require("./generatefile")

const app=express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.get('/',(req,res)=>{
//    return  res.json({hello:"world!"});
// });

// app.post("/run", async (req, res) => {
//     console.log(req.body);
  
//     const { language = "java", code } = req.body;
//     const { filename, filepath } = await generateFile(language, code);
//     console.log(`Generated file: ${filename}`);
  
//     let output;
//     // try {
//     //   output = await executeJava(filename, filepath);
//     // } catch (error) {
//     //   output = `Error in showing filename: ${error}`;
//     //   console.error('Error in showing filename:', error);
//     // }
  
//     console.log(`Generated file: ${filename}`);
//     return res.send(filename);
//   });


  
// app.post("/runn", async (req, res) => {
//     console.log(req.body);
  
//     const { language = "java", code } = req.body;
//     const { filename, filepath } = await generateFile(language, code);
//     console.log(`Generated file: ${filename}`);
  
//     let output;
//     try {
//       output = await executeJava(filename, filepath);
//     } catch (error) {
//       output = `Error in showing output: ${error}`;
//       console.error('Error in showing output:', error);
//     }
  
//     console.log(`Generated file: ${filename}`);
//     return res.send(output);
//   });
let filename, filepath;
// let filename, filepath;

app.post("/run", async (req, res) => {
  console.log(req.body);
  console.log("ijij" +filename);
  console.log("djwhd"+filepath);

  const { language = "java", code } = req.body;
  if (!filename || !filepath) {
    // Generate the file only if it hasn't been generated before
    const fileData = await generateFile(language, code);
    filename = fileData.filename;
    filepath = fileData.filepath;
    console.log(`Generated file: ${filename}`);
  } else {
    // Overwrite the existing file with new code
    await fs.writeFile(filepath, code, (err) => {
      if (err) {
        console.error('Error in overwriting file:', err);
        return res.send(`Error in overwriting file: ${err}`);
      }
      console.log(`File ${filename} overwritten with new code`);
    });
  }

  return res.send(filename);
});
console.log(filename);
console.log(filepath);

app.post("/runn", async (req, res) => {
  console.log("filename while execution: " + filename);
  console.log("filepath while execution: " + filepath);

  if (!filename || !filepath) {
    return res.send("No file has been generated yet");
  }

  try {
    const output = await executeJava(filename, filepath);
    console.log(output);
    return res.send(output);
  } catch (error) {
    const output = error.error.message;
    console.error('Error in executing Java code:', output);
    return res.send( output);
  }
});
app.listen(5000,()=>{
    console.log("Listening on port 5000");
})