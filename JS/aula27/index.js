// (condicao) ? 'valor verdadeiro' : 'valor falso'


const poontuacaoUsuario = 100;
const nivelUsuario = poontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);