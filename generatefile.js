
const fs=require('fs');
const path=require('path');
const {v4:uuid}=require('uuid');
const crypto = require('crypto');
const dircodes=path.join(__dirname,"codes");
 const generateRandomAlphaString = (length) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return result;
};
if(!fs.existsSync(dircodes))
{
    fs.mkdirSync(dircodes,{recursive:true});
}

const generateFile=async(format,content)=>{
    // const jobid=generateRandomId();
    const filename=`${generateRandomAlphaString(8)}.${format}`;
    const filepath=path.join(dircodes,filename);
    await fs.writeFileSync(filepath,content);
    console.log(filename);
    return {filepath,filename};



    
};

// export generateFile;

module.exports={
    generateFile
};