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
        alert("El resultado de la operacion es:  " + this.resultado)
    }
}

// calculadora visual

class Visual extends Calculadora{
    constructor(){
        super();
        this.valor = [,];
    }

    sumar(){
       this.preguntaValor()
       console.log(this.valor)
       super.sumar(this.valor[0],this.valor[1]);
       this.Resultado();
    }

    restar(){
        this.preguntaValor()
        super.restar(this.valor[0],this.valor[1]);
        this.esultado();
    }

    multiplicar(){
        this.preguntaValor()
        super.multiplicar(this.valor[0],this.valor[1]);
        this.Resultado();
    }

    dividir(){
        this.preguntaValor()
        super.dividir(this.valor[0],this.valor[1]);
        this.Resultado();
    }

    potencia(){
        this.preguntaValor()
        super.potencia(this.valor[0],this.valor[1]);
        this.Resultado();
    }

    preguntaValor(){
        this.valor[0] = document.getElementById("primerValor").value;
        this.valor[1] = document.getElementById("segundoValor").value;
    }

    Resultado(){
        document.getElementById("resultado").value = this.resultado;
    }

}

var calculadoraVisual = new Visual();

