
function Bank(numeroConto, intestatario, saldo) {
    this.numeroConto = numeroConto;
    this.intestatario = intestatario;
    this.saldo = saldo;

    this.stampaNumeroConto = function () {
        if (this.numeroConto) {
            console.log('numero conto: ' + this.numeroConto)
        } else {
            console.log('numero conto inesistente')
        }
    };
    this.stampaIntestatario = function () {
        if (this.intestatario) {
            console.log('nome intestatario: ' + this.intestatario)
        } else {
            console.log('Intestatario inesistente: ')
        }
    };
    this.stampaSaldo = function () {
        if (this.saldo) {
            console.log('saldo: ' + this.saldo)
        } else {
            console.log('saldo non disponibile: ')
        }
    };
    this.deposito = function (importo) {
        this.saldo += importo;
        console.log(this.intestatario + 'ha depositato ' + importo + ' Euro')
    };
    this.prelievo = function (importo) {
        if (importo <= this.saldo) {
            this.saldo = this.saldo - importo;
            console.log(this.intestatario + 'ha prelevato: ' + importo + ' Euro');
        } else {
            console.log('fondi insufficienti per: ' + this.intestatario);
        }
    };
    this.visualizzaSaldo = function () {
        console.log('saldo di ' + this.intestatario + ': ' + this.saldo + ' Euro');
    };
    this.interessi = function () {
        let interessi = (this.saldo * 1) / 100;
        console.log('calcolo interessi di ' + this.intestatario + ': ' + interessi + ' Euro');
    };
}


var conto1 = new Bank('101010', 'Mario Rossi ', 1200);
var conto2 = new Bank('202020', 'Paolo Cagliari ', 1400);
var conto3 = new Bank('303030', 'Marta Ferrari ', 800);

conto1.stampaNumeroConto();
conto1.stampaIntestatario();
conto1.stampaSaldo();
conto1.deposito(260);
conto1.prelievo(500);
conto1.visualizzaSaldo();
conto1.interessi();
console.log('------------')

conto2.stampaNumeroConto();
conto2.stampaIntestatario();
conto2.stampaSaldo();
conto2.deposito(200);
conto2.prelievo(50);
conto2.visualizzaSaldo();
conto2.interessi();
console.log('------------')

conto3.stampaNumeroConto();
conto3.stampaIntestatario();
conto3.stampaSaldo();
conto3.deposito(300);
conto3.prelievo(1000);
conto3.visualizzaSaldo();
conto3.interessi();
console.log('------------')