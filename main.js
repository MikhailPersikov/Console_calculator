function culc(operators,numb1,numb2) {
    if ((numb1 && numb2) === undefined){
        return 'Error'
    } else if(operators === 'sum') {
        return numb1 + numb2; 
    } else if (operators === 'multi') {
        return numb1 * numb2;
    } else if (operators === 'dev') {
        return numb1 / numb2; 
    } 
    else if (operators === 'sub') {
        return numb1 - numb2; 
    } else if (operators === 'rem') {
        return numb1 % numb2; 
    } else if (operators === 'exp') {
        return numb1 ** numb2; 
    } else if (operators ==  String || Number || NaN) {
        return "unknow operators"
    } else 'Error'
} 

console.log(culc('sad',1,2))
console.log(culc('sum',1,2))
console.log(culc('multi',2,2))
console.log(culc('dev',6,3))
console.log(culc('sum'))
console.log(culc('sum',1))
console.log(culc('sum',"asd"))



