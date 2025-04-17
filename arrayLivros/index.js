const livros = require('./arrayLivros'); // importando array de livros e passando o array para variavel "livros".

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    } //estamos comparando os preços de cada livro, e guardando a posição do mais baratinho
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].nome}`); // o livro mais barato custa 25 e o titulo é O Hobbit