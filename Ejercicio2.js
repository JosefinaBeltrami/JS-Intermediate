class Calculadora {
    constructor () {
        this.resultado = [];
    }
    sumar(primervalor, segundovalor){
        var valor = parseInt (primervalor) + parseInt(segundovalor);
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

class Cutronga extends Calculadora {
    constructor() {

        super();
    }
    
    sumar(){
        var valor1 = prompt("Va a realizar una Suma, ingresar primer valor");
        var valor2 = prompt(" ingresar segundo valor");
        super.sumar(valor1, valor2);
    }

    restar(){
        var valor1 = prompt("Va a realizar una resta, ingresar primer valor");
        var valor2 = prompt(" ingresar segundo valor");
        super.restar(valor1, valor2);
    }
    multiplicar(){
        var valor1 = prompt("Va a realizar una multiplicación, ingresar primer valor");
        var valor2 = prompt("ingresar segundo valor");
        super.multiplicar(valor1, valor2);
    }
    dividir(){
        var valor1 = prompt("Va a realizar una division, ingresar primer valor");
        var valor2 = prompt("ingresar segundo valor");
        super.dividir(valor1, valor2);
    }
    potencia(){
        var valor1 = prompt("Va a realizar una potencia, ingresar primer valor");
        var valor2 = prompt("ingresar segundo valor");
        super.potencia(valor1, valor2);
        
    }
    mostrararray(valor){
        alert("El resultado acumulado es:   " + this.resultado);
    }
}


var miCalculadora = new Cutronga();
miCalculadora.sumar();
miCalculadora.restar();
miCalculadora.dividir();
miCalculadora.multiplicar();
miCalculadora.potencia();
miCalculadora.mostrararray();
