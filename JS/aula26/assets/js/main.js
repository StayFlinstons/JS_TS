const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    setResultado();
})
// Desabilitar o submit

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'Qualquer coisa';
    resultado.appendChild(p);
}