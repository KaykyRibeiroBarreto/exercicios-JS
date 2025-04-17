const frutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi'];

/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}*/
 

/* for (let i in frutas) {
    console.log(frutas[i]);
}*/

for (let fruta of frutas) {
    console.log(fruta);
}

/* O for...in é mais indicado para objetos, 
enquanto for...of é melhor para arrays, 
pois evita acessos desnecessários aos índices. */