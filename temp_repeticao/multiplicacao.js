const readlineSync = require('readline-Sync');
console.log("insira um numero para imprimir a tabuada de 1 ao 10:\n");
let num = readlineSync.question("-");
num = parseInt(num)
for(let i = 1; i <= 11; i++) {
  console.log(`${num} x ${i} = ${num*i}`)
}