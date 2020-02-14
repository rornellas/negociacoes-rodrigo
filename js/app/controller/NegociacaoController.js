class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")
        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($("#negociacoesView"))
        this._negociacoesView.update(this._listaNegociacoes)

        this._mensagemView = new MensagemView($("#mensagemView"))
    }

    adiciona(event) {
        event.preventDefault()

        let mensagem;

        if(this._inputQuantidade.value <= 10) {
            mensagem = new MensagemInfo("Negociação criada com sucesso!")

            this._listaNegociacoes.adiciona(this._criaNegociacao())
            this._negociacoesView.update(this._listaNegociacoes)
            // this._listaNegociacoes.negociacoes.length = 0;
            // this._listaNegociacoes.negociacoes.push(this._criaNegociacao())
            this._limpaFormulario()
        } else {
            mensagem = new MensagemErro("Quantidade máxima deve ser 10!")
        }

        
        this._mensagemView.update(mensagem)

        // console.log("negociacao", this._listaNegociacoes.negociacoes)
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario() {
        this._inputData.value = ''
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.01;
        this._inputData.focus();
    }
}