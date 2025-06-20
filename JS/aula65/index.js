// Filter vai sempre retornar um array com a mesma quantidade de elementos ou menos

// Retorne numeros maiores que 10
const numeros = [5, 23, 10, 28, 2, 8, 11, 12, 4, 30, 28, 0, 15, 1, 3];
const numerosFiltrados = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);

//=================================================================

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const idadeMaiorQ50 = pessoas.filter(obj => obj.idade >= 50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(nomeTerminaComA);