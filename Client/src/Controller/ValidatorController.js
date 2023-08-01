class ValidatorController{
    constructor(model, view, erro){
        this.model = model;
        this.view = view;
        this.erro = erro;
        
        this.view.bindValidatorButton(this.handlerValidatorButton.bind(this));
    }

    handlerValidatorButton(){
        this.model.setPassword(this.view.getPassword());
        const isValid = this.erro.displayError(this.view.getPassword());
        const errors = this.erro.getError();
        this.view.resultDisplay(isValid, errors);
    }
}