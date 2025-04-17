// Criando um array com alguns personagens
const herois = ["Iron Man", "Spider-Man", "Thor", "Hulk"];

// Acessando elementos
console.log(herois[0]); // Iron Man (índice 0)
console.log(herois[2]); // Thor (índice 2)

// Adicionando um novo herói no final
herois.push("Black Panther");
console.log(herois); // ["Iron Man", "Spider-Man", "Thor", "Hulk", "Black Panther"]

// Removendo o último herói
herois.pop();
console.log(herois); // ["Iron Man", "Spider-Man", "Thor", "Hulk"]

// Iterando (percorrendo) o array
for (let i = 0; i < herois.length; i++) {
  console.log(`Herói ${i + 1}: ${herois[i]}`);
}
