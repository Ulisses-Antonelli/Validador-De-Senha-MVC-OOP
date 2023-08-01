class ValidatorErros{
    constructor(){
        this.errorMessages = [
            { regex: /\d/, error: "A senha deve ter pelo menos um dígito (0-9)." },
            { regex: /[A-Z]/, error: "A senha deve ter pelo menos uma letra maiúscula (A-Z)." },
            { regex: /[!@#$%^&*()_+]/, error: "A senha deve ter pelo menos um dos seguintes caracteres especiais: ! @ # $ % ^ & * ( ) _ +." },
            { regex: /^[A-Za-z0-9!@#$%^&*()_+]+$/, error: "A senha deve ser composta apenas por caracteres alfanuméricos (letras e dígitos) ou pelos caracteres especiais mencionados acima." },
            { regex: /^.{8}$/, error: "A senha deve ter um comprimento de 8 caracteres." }
        ];

        this.errors = [];
    }
    getError(){
        return this.errors;
    }

    displayError(password) {
        this.errors = [];
        this.errorMessages.forEach(({regex, error})=>{
            if(!regex.test(password)){
                this.errors.push(error)
            }
        })
        return this.errors.length === 0;  
    }
}