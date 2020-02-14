class MensagemInfo {

    constructor(texto) {
        this._texto = texto;
        this._classe = 'info';
        Object.freeze(this)
    }

    get texto() {
        return this._texto;
    }

    get classe() {
        return this._classe;
    }

}