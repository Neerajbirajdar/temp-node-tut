const { readFile, writeFile }=require('fs')
console.log('start');
readFile('./first.txt','utf8',(err, result) =>{
if (err){
    console.log(err);
    return;
    }
    //console.log(result);
    const first=result
    readFile('./second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err);
            return;
        }
        //console.log(result);
        const second=result
    writeFile('./result-async.txt',`Here is the result: ${first} ${second}`,(err,result)=>{
        if (err){
            console.log(err);
            return;
        }
        console.log("done with the result");
      })
    
    })
})
console.log('done');

