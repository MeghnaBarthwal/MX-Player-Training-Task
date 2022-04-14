// var buff = new Buffer(26);

// for(var i=0;i<26;i++){
//     buff[i]= i + 65;
// }

// console.log(buff.toString('ascii', 0, 10));



//read file code here
// var readData = function(filename){
//     return new Promise((resolve, rejects) = > {
//         fs.readFile(filename, function(err,data){
//             if(err){
//                 rejects(err);
//             }
//             resolve(data.toString());
//         })
//     })
// }
// readData("dummy.txt").then((res) =>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//console.log("This is the last line");
// var data = fs.readFileSync('dummy.txt');
// console.log(data.toString());
// fs.readFile('dummy.txt', function(err,data){

// if(data.includes('my')){
//     console.log("yes");
// }
// })
// fs.readFile('dummy.txt', function(err,data){
//     if(err){
//         console.log(err);
//     }else
//     console.log(data.toString());
// })
// console.log("this is the second line");


// var fs = require("fs")


// var dat = fs.readFileSync('dummy.txt');
// var data = dat.toString();
// var dataf = data.split(" ")
// var flag = 0;
// for(var i=0;i<dataf.length;i++){
//     if(dataf[i]=="type"){
//         console.log("Found");
//         flag=1;
//         break;
//     }
    
// }
// if(flag==0){
//     console.log("Not found")
// }
// var promise = new Promise((resolve, reject) =>{
//     const marks = 65;
//     if(marks >= 70){
//         resolve("You are hired");
//     }
//     reject("you are rejected");
// });
// promise.then((res)=> { console.log(res)}).catch((err)=>{
//     console.log(err);
// })



// function print(txt, cb){
//     console.log(txt);
//     cb();
// }
// print("printinf text ");
// console.log("line 1");

// setTimeout(function(){
//     console.log("Line 2");
// }, 1000);

// console.log("line 3");

//console.log(__dirname);
//console.log(__filename);
//console.error(new Error("it is an object of error class "));

//console.warn("warning");

//write the file
// var fs = require("fs");
// var path = require('path');

// console.log("this is the first line");

// const data = "this is the modified data ."
// fs.readdir(__dirname, function(err,files){
// if(err){
//     console.log(err);
// }else{
//  console.log("files in "+ __dirname);
//  files.forEach((file) => {
//      if(path.extname(file) == ".js"){
//          console.log(file);
//      }
//  })
// }
//console.log("file not present");
// ;console.log("stats:");
// console.log(stats.isFile());
// console.log(stats.isDirectory());
// console.log(stats);
//})
//console.log("this is last line")

// function getFileContent(savPath, callback) { 
//     fs.readFile(srcPath, 'utf8', function (err, data) {
//         if (err) throw err;
//         callback(data);
//         }
//     );
// }

// function copyFileContent(savPath, srcPath) { 
//     getFileContent(srcPath, function(data) {
//         fs.writeFile (savPath, data, function(err) {
//             if (err) throw err;
//             console.log('complete');
//         });
//     });
// }

// var fs = require('fs');
// var data = '';
// var readStream = fs.createReadStream("rename-demo.txt");
// readStream.on('data', function(chunks){
//     data+=chunks;
// });

// readStream.on('error', function(err){
//     console.log(err);
// });
// readStream.on('end', function(){
//     console.log(data);
// });

// var fs = require('fs');
// var data = 'This is my data to write';
// var writeStream = fs.createWriteStream("rename-demo.txt");
// writeStream.write(data, "utf-8");
// writeStream.end();
// writeStream.on('error', function(err){
//     console.log(err);
// });
// writeStream.on('finish', function(){
//     console.log("writing finished");
// });

// var fs = require('fs');
// var calc = require('./calc');
// calc.sum(20,30);

var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200, {'content-Type': 'text/html'});
    //res.write(" Request URL: " + req.url);
    if(req.url == "/about"){
        res.write("Welcome to about us");
    } else if (req.url == "/contact"){
        res.write("Welcome to contact us")
    }else{
        res.write(" welcome to home");
    }
    res.end();
}).listen(4000, function(){
    console.log("server is running at port: 4000");
});

