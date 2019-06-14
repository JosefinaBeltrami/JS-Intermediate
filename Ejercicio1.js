class Calculadora {
    constructor () {
        this.resultado = [];
    }
    sumar(primervalor, segundovalor){
        var valor = primervalor + segundovalor;
        this.acumular (valor);
        console.log(valor);
    }

    restar(primervalor, segundovalor){
        var valor = primervalor - segundovalor
        console.log(valor);
        this.acumular (valor);
    }

    multiplicar(primervalor, segundovalor){
        var valor = primervalor * segundovalor;
        console.log(valor);
        this.acumular (valor);
    }

    dividir(primervalor, segundovalor) {
        var valor = primervalor / segundovalor;
        console.log(valor);
        this.acumular (valor);
    }

    potencia(primervalor, segundovalor){
        var valor = primervalor ** segundovalor;
        console.log(valor);
        this.acumular (valor);
    }

    acumular(valorfin) {
        this.resultado.push (valorfin);

    }
    limpiar () {
        this.resultado = [];
    }

    mostrararray() {
        console.log(this.resultado);
    }


}

var miCalculadora = new Calculadora();
miCalculadora.sumar(3,4);
miCalculadora.restar(5,3);
miCalculadora.dividir(3,3);
miCalculadora.potencia(4,4);
miCalculadora.mostrararray();
miCalculadora.sumar(7,4);
miCalculadora.restar(5,13);
miCalculadora.dividir(300,43);
miCalculadora.potencia(4,3);
miCalculadora.mostrararray();

miCalculadora.limpiar();
miCalculadora.mostrararray();



