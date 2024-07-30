function form() {
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function receberformulario(evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const idade = formulario.querySelector('.idade');
        const altura = formulario.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value
        });

        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} ${altura.value}</p>`;
    }

    formulario.addEventListener('submit', receberformulario);
}

form();
