/*
Primitivos (Imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor copiados

Referência (Mutável) - array, object, funtion - passados por referência
*/

// let a = [1, 2, 3];
// let b = [...a];
// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(b, a);

const a = {
    nome: 'Ismael',
    sobrenome: 'Denis'
};
const b = {...a};

a.nome = 'Joao';
console.log(b, a);