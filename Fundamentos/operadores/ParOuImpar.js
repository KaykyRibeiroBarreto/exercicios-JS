const verificarParOuImpar = (numero) => {
  const resultado = (numero % 2 === 0) ? 'par' : 'impar';
  console.log(`o numero é ${numero} é ${resultado}.`)
  
};

verificarParOuImpar(250); // Deve imprimir "Par"
verificarParOuImpar(3); // Deve imprimir "Ímpar"
