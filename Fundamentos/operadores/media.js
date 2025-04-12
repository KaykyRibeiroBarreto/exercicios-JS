const  readlineSync = require('readline-sync');

let numeroA = Number(readlineSync.question('Digite um numero: '));
let numeroB = Number(readlineSync.question('Digite um numero: '));
let media = `${((numeroA + numeroB) / 2)}` // Variável que armazena a formula da média entre os números A e B

console.log(`A média entre ${numeroA} e ${numeroB} é igual a ${media}  `);