const { exec } = require("child_process");
const fs = require('fs');
const path = require('path');

const { filename } = require('./generatefile');

const outputPath = path.join(__dirname, "outputs");
const codePath = path.join(__dirname, "codes",".class");

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
    console.log("outputPath  ",outputPath);
}
console.log("codepath  ",codePath);
// const executeJava = (filename,filepath) => {
//     const jobId = path.basename(filename, path.extname(filename));
//     const javaFilepath = path.join(filepath);

    
//     // const jobId = path.basename(filename,path.extname(filename)).split(".")[0];
//     // const javaOutputPath = path.join(outputPath, `${jobId}.out`);
  
//     return new Promise((resolve, reject) => {
//         exec(`javac ${javaFilepath} && java -classpath ${filepath} ${jobId}`, 
//             (error, stdout, stderr) => {
//                 if (error) {
//                     console.error("Error in executing Java code:", error);
//                     reject(`Error in executing Java code: ${error.message}`);
//                   } 
//             // stderr && reject(stderr);
//             // console.log(stdout);
            
//             // console.log(jobId);
//             else {
//                 resolve(stdout);
//               }
            
//             // }
//         });
//     });
// // };
// const executeJava = (filename, filepath) => {
//     const jobId = path.basename(filename, path.extname(filename)+'.class');
//     const javaFilepath = path.join(path.dirname(filepath),jobId);
//     console.log(filepath);
  
//     return new Promise((resolve, reject) => {
//       exec(
//         `javac ${filepath} && java -classpath ${path.dirname(filepath)} ${jobId}`,
//         console.log("hello"),
//         (error, stdout, stderr) => {
//           if (error) {
//             console.error("Error in executing Java code:", error);
//             reject(error,stderr);
//           } else {
            
//             // return stdout;
//             console.log("FUH3UFYYFu",stdout);
//             resolve(stdout);
//           }
//         }
//       );
//     });
// //   };
// const executeJava = (filename, filepath) => {
//     const classFilename = path.basename(filename, path.extname(filename)) + '.class';
//     const classFilepath = path.join(path.dirname(filepath), classFilename);
  
//     return new Promise((resolve, reject) => {
//       exec(`javac "${filepath}" && java -classpath "${path.dirname(filepath)}" "${path.basename(filename, path.extname(filename))}"`, (error, stdout, stderr) => {
//         if (error) {
//           reject({ error, stderr, filename });
//         //   resolve(stderr);
//         } else {
//           console.log(stdout); // Print the output to the console
//           resolve(stdout);
//         }
//       });
//     });
//   };


const executeJava = (filename, filepath) => {
    const classFilename = path.basename(filename, path.extname(filename)) + '.class';
    const classFilepath = path.join(path.dirname(filepath), classFilename);
  
    return new Promise((resolve, reject) => {
      exec(`javac "${filepath}" && java -classpath "${path.dirname(filepath)}" "${path.basename(filename, path.extname(filename))}"`, { timeout: 5000 }, (error, stdout, stderr) => {
        if (error) {
          reject({ error, stderr, filename });
        } else {
          const output = stdout.replace(/\n$/, ''); // Remove trailing newline character
          resolve(output);
        }
      });
    });
  };
  
  module.exports = {
    executeJava
};
