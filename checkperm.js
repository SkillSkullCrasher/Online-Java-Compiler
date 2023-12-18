const fs = require('fs');
const {filepath} =require("./generatefile")

// const filePath = 'path/to/your/file'; // Replace this with the actual file path

fs.access(filepath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.error('File access error:', err);
        return;
    }
    console.log('File has read and write access.');
});
