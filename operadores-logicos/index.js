/*
Operadores Lógicos
&& -> AND -> e
|| -> OR -> ou
! -> NOT -> não
*/

/*
João precisa ter 18 ou mais anos para dirigir e possuir CNH
Use operadores lógicos para verificar se João pode dirigir
*/

const idadeJoao = 18;
const possuiCNH = true;

if (idadeJoao >= 18 && possuiCNH) {
    console.log('João pode dirigir');
} else {
    console.log('João não pode dirigir');
}

/* 
Maria quer comprar um carro novo e precisa que ele seja preto ou branco
Use operadores lógicos para verificar se Maria pode comprar o carro
*/

const corCarro = 'preto';
const corCarro2 = 'branco';

if (corCarro === 'preto' || corCarro2 === 'branco') {
    console.log('Maria pode comprar o carro');
} else {
    console.log('Maria não pode comprar o carro');
}


/*
Maicão quer correr de bicicleta e precisa que esteja sol
Use operadores lógicos para verificar se Maicão pode correr de bicicleta
*/

const estaSol = false;

if (!estaSol) {
    console.log('Maicão deve ficar em casa');
} else {
    console.log('Maicão pode correr de bicicleta');
}
