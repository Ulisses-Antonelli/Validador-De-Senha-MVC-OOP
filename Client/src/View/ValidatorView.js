class ValidatorView{
    constructor(){
        let $ = document.getElementById.bind(document);
        this.inputPassword = $('password');
        this.validateBtn = $('validateBtn');
        this.result = $('result');
        this.resetBtn = $('resetBtn');
    }

    getPassword(){
        return this.inputPassword.value;
    }

    bindValidatorButton(handler){
        this.validateBtn.addEventListener('click', handler);
    }

    resultDisplay(validator, errors){
        if(validator){
            this.result.textContent = "Senha válida";
            this.result.classList.remove('invalid');
            this.result.classList.add('valid');
        }else{
            errors.forEach((element) => {
                const errorSpan = document.createElement('div');
                errorSpan.textContent = element;
                this.result.appendChild(errorSpan);
            });
            this.result.classList.remove('valid');
            this.result.classList.add('invalid');
        }
        this.resetValidator();
    }

    resetValidator() {
        this.resetBtn.addEventListener('click', ()=>{
            this.inputPassword.value = "";
            while(this.result.firstChild){
                this.result.removeChild(this.result.firstChild)
            }
        })
    }
}

