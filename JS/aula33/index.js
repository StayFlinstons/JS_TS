const pessoa = {
    nome: 'Ismael',
    sobrenome: 'Denys',
    idade: 20,
    endereco: {
        rua: 'Laranja',
        numero: 47
    }
};

// Atribuicao via desestruturacao

// const {nome: teste, sobrenome, idade} = pessoa;

// const {endereco: {rua : r, numero: n}, endereco} = pessoa;

const {nome, sobrenome, ...resto} = pessoa;
console.log(resto);