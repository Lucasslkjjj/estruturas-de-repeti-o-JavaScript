const readlineSync = require('readline-Sync')
let array = []
let contador = 1
let posicao = 0
while(contador <= 20) {
  console.log(`insira o número ${contador} \n`)
  let num = readlineSync.question("-")
  num = parseInt(num)
  array[posicao] = num
  contador++
  posicao++
}
let final = 0
for(let i of array) {
  final = final + i
}
console.log(`a soma dos elementos é: ${final}`)