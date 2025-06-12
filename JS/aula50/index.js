// arguments que sustenta todos os argumentos enviados
function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total)
}

// function funcaoObj({nome, sobrenome, idade}){
//     console.log(nome, sobrenome, idade)
// }
// let obj = {nome: 'Ismael', sobrenome: 'Denys', idade: '20'};

// function funcaoObj2([valor1, valor2, valor3]){
//     console.log(valor1, valor2, valor3)
// }

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;      
    }
    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);