class MensagemView extends View {
    constructor(elemento) {
        super(elemento)
    }

    template(model) {

        return model.texto ? `
            <p class="alert alert-${model.classe}">${model.texto}</p>
        ` : '<p></p>'
    }
}