// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> começa com maiúsculo > Pessoa (new)

function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 123456;

    const metodoInterno = function () {

    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = e => {
        console.log(this.nome + ': Sou um método');
    }
}

const p1 = new Pessoa('Richard', 'Simões');
const p2 = new Pessoa('Ismael', 'Denys');

p1.metodo();
