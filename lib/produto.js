const dinheiro = require('./dinheiro');
function Produto(codpro, valor, qtd, qtdreserva, unidade, codprodvenda, valorini, valorpromo, descricao, codinterno, sittrib, ncm, orig, grupo, aliq, cest) {
    this.CODPRO = codpro || null
    this.CODPRODVENDA = codprodvenda || null
    this.CODINTERNO = codinterno || null
    this.DESCRICAO = descricao || null
    this.VALOR = new dinheiro(valor) || 0
    this.VALORINI = new dinheiro(valorini) || 0
    this.VALORPROMO = new dinheiro(valorpromo) || 0
    this.QTD = qtd || 0
    this.QTDRESERVA = qtdreserva || 0
    this.TOTAL = new dinheiro(valor * qtd)
    this.TOTALSD = new dinheiro(valorini * qtd)
    this.UNIDADE = unidade || null
    this.SITTRIB = sittrib || null
    this.NCM = ncm || null
    this.CEST = cest || null
    this.ORIG = orig
    this.GRUPO = grupo || null
    this.ALIQ = aliq || 0
}


module.exports = Produto;