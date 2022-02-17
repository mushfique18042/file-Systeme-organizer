let fs= require('fs');
let path=require('path');
let inputAr=process.argv.slice(2);
console.log(inputAr);
//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help
let command=inputAr[0];
switch(command){
    case "tree":
        treeFn(inputAr[1]);
        break;
        case "organize":
            organizedFn(inputAr[1]);
            break;
            case "help":
                helpFn();
            break;
            default:
                console.log('please input right command');
                break;
}
function treeFn(dirPath){
    console.log("Tree command implemented for", dirPath)
}
function organizedFn(dirPath){
    console.log("Organize command implemented for", dirPath);
    // 1. input-> directory path given
       if(dirPath==undefinrd){
           console.log('kindly enter the path');
           return;
       }else{
           let doesExist= fs.existsSync(dirPath);
           if(doesExist){
               let destPath= path.join(dirPath,"organized_files");
               fs.mkdirSync(destPath);
           }
       else {
           console.log('kindly enter the correct path');
           return;
       
        } }
        organizeHelper(dirPath,destPath);
    
    // 2. create-> organized files-> directory
    // 3. identifies categories of all files
    // 4. copy/ cut files to that organized category

}

function treeHelper(dirPath,indent){
    let isFile=fs.lstatSync(dirPath).isFile();
    if(isFile==true){
        let fileName= path.basename(dirPath);
        console.log(indent+"----"+fileName);
    }else{
        let dirName=path.basename(dirPath);
        console.log(indent + "└──" + dirName);
         let childrens = fs.readdirSync(dirPath);
         for (let i = 0; i < childrens.length; i++) {
             let childPath = path.join(dirPath, childrens[i]);
             treeHelper(childPath, indent + "\t");
         }
    }
}
function organizeHelper(src,dest){
    let childNames= fs.readdirSync(src);
    for(let i=0;i<childNames.length;i++){
        let childAddress= path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile){
            console.log(childNames[i]);
            console.log(childNames[i],"belongs to-->", category);
            sendFiles(childAddress,dest,category);
        }
    }
}
function sendFiles(srcFile, dest, category){
    let categoryPat= path.join(dest, category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let fileName=path.basename(srcFile);
    let destFilePath= path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath,destFilePath);
    console.log(fileName,"copied to-->", category);
}





function helpFn(){
    console.log(`
    list of all the command:
    node main.js tree "directoryPath"
    node main.js organize "directoryPath"
    node main.js help
    
    `);
}