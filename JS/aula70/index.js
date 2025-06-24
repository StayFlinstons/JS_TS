const pessoa1 = new Object();

pessoa1.nome = 'Ismael';
pessoa1.sobrenome = 'Denys';
pessoa1.idade = 20;

const pessoa2 = {
    nome: 'Ismael',
    sobrenome: 'Denys'
};

pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`)
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
};

for (let chave in pessoa1) {
    // console.log(pessoa1[chave]);
}

// ============================================================
// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

// const p1 = criaPessoa('Ismael', 'Denys');

// Constructor function

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}


// New = Cria um objeto vazio {}, atrela o this ao objeto e retorna o constutor
const p1 = new Pessoa('Ismael', 'Denys');
console.log(p1);