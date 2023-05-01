const MIN_NUMBER = 1016;
const MAX_NUMBER = 1937;
const arrNumber = [];
for (let i = MIN_NUMBER; i < MAX_NUMBER; i++){
    if(i % 3 === 0 && i % 7 === 0 && i % 5 !== 0 && i % 2 !== 0){
        arrNumber.push(i);
    }
}
console.log(arrNumber.pop())
