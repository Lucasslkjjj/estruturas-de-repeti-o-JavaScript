const readlineSync = require('readline-Sync')
let coelho = []; let rato = [];let cobaias = [];
for(let i = 1; i <=16; i++) {
  console.log("insira o numero de cobaias:\n")
  let num_cobaias = readlineSync.question("-")
  num_cobaias = parseInt(num_cobaias)
  cobaias.push(num_cobaias)
  console.log("insira:\n")
  console.log("1-coelhos\n")
  console.log("2-ratos\n")
  let tipo = readlineSync.question("-")
  tipo = parseInt(tipo)
  switch (tipo) {
    case 1:
    rato.push(num_cobaias)
      break;
    case 2:
      coelho.push(num_cobaias)
      break;
      default:
        console.log("erro!por favor tente novamente.")
        break;
  }
}
let contagem_rato = 0;
let contagem_coelho = 0;
let contagem_cobaia = 0;
for(percursor of cobaias) {
  contagem_cobaia += percursor
}
for(ratos of rato) {
  contagem_rato += ratos
}
for(coelhos of coelho) {
  contagem_coelho += coelhos
}
console.log(cobaias)
console.log(rato)
console.log(coelho)
console.log(contagem_coelho)
console.log(contagem_rato)
console.log(contagem_cobaia)
console.log(`nos 15 casos,teve:\n`)
console.log(`${contagem_cobaia} de cobaias\n`)
console.log(`${contagem_rato} de ratos \n`)
console.log(`${contagem_coelho} de coelhos \n`)
console.log(`a porcentagem de ratos é: ${(contagem_rato * 100) / contagem_cobaia}%`)
console.log(`a porcentagem de coelhos é: ${(contagem_coelho * 100) / contagem_cobaia}%`)
