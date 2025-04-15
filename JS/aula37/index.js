const nome = ['ismael', 'luiz', 'zel', 'henrique'];

// for (let i = 0; i < nome.length; i++ ){
//     console.log(nome[i])
// }

// for (let i in nome){
//     console.log(nome[i]);
// }

// for (let valor of nome){
//     console.log(valor)
// }

nome.forEach(function(valor, indice) {
    console.log(valor, indice)
})