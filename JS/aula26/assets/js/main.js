// Desabilitar o submit
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, imc);

})

function getImc (peso, altura) {
    const imc = peso / (altura**2);
    return imc.toFixed(2);
}

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if  (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function criarP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, imc) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP();
    if (imc >= 40) {
        p.classList.add('bad')
    }   else {
        p.classList.add('presultado')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}