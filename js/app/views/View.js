class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this.template(model)
    }

    template(model) {
        throw new Error('É necessário implementar este método')
    }
}