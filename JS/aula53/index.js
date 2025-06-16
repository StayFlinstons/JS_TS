function retornaFuncao() {
    const nome = 'Ismael';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao());