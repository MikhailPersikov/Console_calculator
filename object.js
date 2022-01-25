function Calc (operation,num1,num2){
    let isNotValid = typeof num1 !== 'number' || typeof num2 !== 'number'
    let action = {
         'sum': num1 + num2,
         'sub': num1 - num2,
         'mult': num1 * num2,
         'div': num1 / num2,
     }

     let ValidOperation = action[operation] !== undefined
     if (isNotValid) return "Error"
     else if (ValidOperation) return  action[operation]
     else return "unknown operation"
}


console.log(Calc('subs',3,1))
console.log(Calc('sub',3,1))
console.log(Calc('sum',2,2))
console.log(Calc('mult',2,2))
console.log(Calc('div',2,2))
console.log(Calc('div',2))
console.log(Calc('div',))
console.log(Calc())