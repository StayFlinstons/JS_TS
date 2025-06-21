const numeros = [5, 23, 10, 28, 2, 8, 11, 12, 4, 30, 28, 0, 15, 1, 3];

const total = numeros.reduce(function(acumulador, valor, indice,array) {
    return acumulador + valor;
}, 0);

// ==================================================================

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 100 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 67 },
];

const velho = pessoas.reduce((acumulador, valor) => {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(velho);