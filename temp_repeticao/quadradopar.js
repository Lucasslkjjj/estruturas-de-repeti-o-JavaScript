let num = 0;
for(i = 1; i <= 101;i++) {
  if(num % 2 === 0) {
    console.log(`o quadrado de ${num} é ${num ** 2}`);
    num++
  }
  else if(num % 2 === 1) {
    num++
    continue;
  }
}