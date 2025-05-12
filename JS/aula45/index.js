// try{
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo')
// } catch (e) {
//     console.log('Tratando o erro')
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        console.log('Não é')
        throw new TypeError('Esperando instância de Date')
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('Pt-BR', {
        hour12: false, 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try{
    const data = new Date('01-01-1970 12:50:10')
    const hora = retornaHora()
    console.log(hora)    
} catch(e){

} finally {
    console.log('Tenha um bom dia')
}

