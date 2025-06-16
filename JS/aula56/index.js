function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = ' # ') {
            return `${this.nome} está falando ${assunto}.`;
        },

        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Ismael', 'Denys', 1.80, 80);
// p1.nomeCompleto = 'Richard Simões Cardoso'
// console.log(p1.nomeCompleto);
// console.log(p1.fala());