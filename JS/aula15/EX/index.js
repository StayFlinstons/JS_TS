const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const TextoTitulo = document.getElementById('texto');

numeroTitulo.innerHTML = '';

numeroTitulo.innerHTML = numero;
TextoTitulo.innerHTML += `<p>Raiz Quadrada ${numero ** 0.5}</p>`;
TextoTitulo.innerHTML += `<p>Numero inteiro: ${Number.isInteger(numero)}</p>`;
TextoTitulo.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
TextoTitulo.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
TextoTitulo.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
TextoTitulo.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}</p>`;