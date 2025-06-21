const numeros = [5, 23, 10, 28, 2, 8, 11, 12, 4, 30, 28, 0, 15, 1, 3];

const dobro = numeros.map(valor => valor * 2);

// =====================================================================

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
const id = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
})
console.log(id);