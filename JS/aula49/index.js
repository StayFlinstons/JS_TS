// Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oi');
}

// Frist-class objetcs (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}

// Arrow function
const arrowFunction = () => {
    console.log('Sou uma ArrowFunction')
}

// Dentro de um objeto
const objeto = {
    falar() {
        console.log('Estou falando...');
    }
}

objeto.falar();