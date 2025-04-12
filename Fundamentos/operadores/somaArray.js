const somaArray = (numeros) => {
 return numeros.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
 }, 0)
}
console.log(somaArray([1, 2, 3, 4, 5])); // Deve retornar 15
