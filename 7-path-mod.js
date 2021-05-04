const path=require('path')
//console.log(path.sep)

const filepath = path.join('/node tut','sub','test.txt')
console.log(filepath)
const base=path.basename(filepath)
console.log(base);

const absilute=path.resolve(__dirname,'node tut','sub','test.txt')
console.log(absilute)



