function culc(operators,numb1,numb2) {
    if ((numb1 === undefined || numb2 === undefined)){
        return 'Error'
    } else if(operators === 'sum') {
        return numb1 + numb2; 
    } else if (operators === 'multi') {
        return numb1 * numb2;
    } else if (operators === 'dev') {
        return numb1 / numb2; 
    } else if (operators === 'sub') {
        return numb1 - numb2; 
    } else if (operators === 'rem') {
        return numb1 % numb2; 
    } else if (operators === 'exp') {
        return numb1 ** numb2; 
    } else if (operators == Number ||  operators ==  NaN) {
        return "unknow operation"
    } else 'Error'
} 

console.log(culc('sad',1,2)) //unknow operation
console.log(culc(1,1,2)) //unknow operation
console.log(culc('sum')) //Error
console.log(culc('sum',1)) //Error
console.log(culc('sum',"asd")) //Error
console.log(culc('exp',5,1)) //5
console.log(culc('multi',2,2)) //4
console.log(culc('sum',1,2)) //3
console.log(culc('dev',6,3)) //2
console.log(culc('sub',5,4)) //1
console.log(culc('rem',8,4)) //0






