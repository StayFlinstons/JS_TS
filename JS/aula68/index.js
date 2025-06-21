const numeros = [5, 23, 10, 28, 2, 8, 11, 12, 4, 30, 28, 0, 15, 1, 3];
const numerosPares = numeros
    .filter(valor => valor %2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);

console.log(numerosPares);