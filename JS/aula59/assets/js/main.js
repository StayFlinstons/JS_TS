function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.iniciar = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) this.realizarConta();
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizarConta();         
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    
    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizarConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if(!conta){
                alert('Conta inválida');
                return;
            }      
            
            this.display.value = String(conta);
        }
        catch(e) {
            alert('Conta inválida');
            return;
        }
    };

}

const calculadora = new Calculadora();
calculadora.iniciar();