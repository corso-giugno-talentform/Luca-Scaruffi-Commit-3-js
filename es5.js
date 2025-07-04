
function Bank(numeroConto, intestatario, saldo) {
    this.numeroConto = numeroConto;
    this.intestatario = intestatario;
    this.saldo = saldo;

    this.stampaNumeroConto = function () {
        if (this.numeroConto) {
            console.log('numero conto:  ' + this.numeroConto)
        } else {
            console.log('numero conto inesistente')
        }
    };
    this.stampaIntestatario = function () {
        if (this.intestatario) {
            console.log('nome intestatario: ' + this.intestatario)
        } else {
            console.log('Intestatario inesistente:')
        }
    };
    this.stampaSaldo = function () {
        if (this.saldo) {
            console.log('saldo: ' + this.saldo)
        } else {
            console.log('saldo non disponibile:')
        }
    }
}

let gruppo = [
    new Bank('101010', 'Mario Rossi', '1200 Euro'),
    new Bank('202020', 'Paolo Cagliari', '1400 Euro'),
    new Bank('303030', 'Marta Ferrari', '800 Euro')
];

gruppo.forEach(function (conto) {
    conto.stampaNumeroConto();
    conto.stampaIntestatario();
    conto.stampaSaldo();
});
