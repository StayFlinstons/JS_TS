function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
    });


    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false
        }
    });

}

const p1 = new Produto('Camiseta', 50, 3);
console.log(p1);