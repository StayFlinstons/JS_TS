const nome = 'Ismael';
const sobrenome = 'Denys';
const idade = 30;
const peso = 90;
const altura = 1.85;
let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome, 'Tem', idade, 'Anos, pesa', peso, 'kg')
console.log(`Tem ${altura} de ${altura} e seu IMC é de ${imc}`)
console.log(nome, 'Nasceu em', anoNascimento, '.')