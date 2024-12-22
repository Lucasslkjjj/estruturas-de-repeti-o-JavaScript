const readlineSync = require('readline-Sync')
let array = []
let contador = 1
let indice = 0
do {
  console.log(`insira o numero ${contador} \n`)
let numero = readlineSync.question("-")
numero = parseInt(numero)
array[indice] = numero
contador++
indice++
}while(contador < 21)
let soma = 0
for(let percursor of array) {
  soma += percursor
}
console.log(`as somas dos numeros é ${soma}`)