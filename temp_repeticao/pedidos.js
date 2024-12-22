const readlineSync = require('readline-Sync');
console.log("deseja fazer um pedido?\n");
console.log("1-sim \n");
console.log("2-não \n");
let respostaa = readlineSync.question("-");
respostaa = parseInt(respostaa);

if(respostaa === 2) {
  console.log("obrigado pela atenção!");
}

else if(respostaa !== 1 && respostaa !== 2) {
  console.log("caractere invalido inserido! por favor tente novamente.");
}

else {
let array = [];
    let prosseguir = true
  do{
console.log("veja o cardápio:\n");
console.log("100-cachorro quente\n");
console.log("101-Bauru Simples\n");
console.log("102-Bauru com ovo\n");
console.log("103-Hamburger \n");
console.log("104-Cheeseburger \n");
console.log("105-refrigerante \n");
console.log("insira o código do item:\n");
let codigo = readlineSync.question("-");
codigo = parseInt(codigo);
  console.log("deseja um outro item?\n");
  console.log("1-sim\n");
  console.log("0-não \n");
  let itemm = readlineSync.question("-");
  itemm= parseInt(itemm);
  array.push(codigo)
  if(itemm === 0){
    prosseguir= false
  }
  } while(prosseguir === true) 


  const lista = {
    100 : 1.70, 101 : 2.30, 102 : 2.60 , 103 : 2.40 , 104 : 2.50 , 105 : 1.00
  }
  console.log(array)
  array = lista[array]
  let final = 0;
  console.log(array)
 for(let codigo of array) {
   final += lista[codigo]
 }
  console.log(`o valor a pagar será de R$ ${final.toFixed(2)}`)

}