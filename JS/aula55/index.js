// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
    const sobrenome = 'Ismael';

    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Denys'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(22, 100, 1.83);