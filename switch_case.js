function culc(operators,numb1,numb2) {
    if ((numb1 === undefined || numb2 === undefined)){
        return 'Error'
    }
    switch(operators) {
        case 'sum': return numb1 + numb2;
        case 'multi': return numb1 * numb2;
        case 'dev': return numb1 / numb2;
        case 'sub': return numb1 - numb2;
        case 'rem': return numb1 % numb2;
        case 'exp': return numb1 ** numb2;
        case undefined: 
        case String: 
        case NaN: return "Error"
        default: return "unknown operation"
    }
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






