console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false

function isEqualSymbols(str1, str2) {
    
   const newStr1 = str1
       .split('')
       .sort()
       .join('');

   const newStr2 = str2
       .split('')
       .sort()
       .join('');

   return newStr1 === newStr2;
}