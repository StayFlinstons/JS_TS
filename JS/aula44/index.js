function soma(x, y){
    if (typeof x !== 'number' || typeof y != 'number'){
        throw new ReferenceError('x e y precisam ser números.');
    }

    return x + y;
}

try {
    console.log(soma('a', 'n'));
} catch(error){
    // console.log(error)
    console.log('Teste')
}