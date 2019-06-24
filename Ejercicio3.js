class Zoo {
    constructor (nombre_zoo,horario,direccion,aforo) {
        this._Nombre = nombre_zoo;
        this._Horario = horario;
        this._Direccion = direccion;
        this._Aforo = aforo;
        this._Area = [];
    }
    addArea(area) {
        this._Area.push(area);
   }
}

class Animal {
    constructor (nombre_animal,especie,edad,nacimiento,salud,PaisOrigen){
        this._Animal = nombre_animal;
        this._Especie = especie;
        this._Edad = edad;
        this._Nacimiento = nacimiento;
        this._Salud = salud;
        this._PaisOrigen = PaisOrigen;
    }
}

class AreaZoo {
    constructor (area,descripcion,animales){
        this._Area = area;
        this._Descripcion = descripcion;
        this._Animal = animales;
    }

  /*  
    Tengo algun error en el metodo que entra una sola vez en el for 
    Armar_Areas () {
        var armar_area = [];
        var area = " ";
        var i = 0;
        console.log(armar_area.length);
            for (i=0; i > armar_area.length; i++) {
                if (area != "FIN") {
                    var area = prompt("Ingrese el area");
                    var descripcion = prompt("Ingrese la descripcion del area");
                    armar_area.push(area,descripcion);
                    console.log(armar_area);
                }
            }

    */        
}

/* miArea.Armar_Areas(); */

/** DAR DE ALTA LOS ZOOLOGICOS con la información de nombre_zoo,horario,direccion,aforo */
var MiZoo = new Zoo("Zoo Aquarium de Madrid", "De lunes a Viernes de 10:30 a 20:00", "Casa de Campo s/n, 28011 Madrid, España", 30000);

var animalesArea1 = [];
var animalesArea2 = [];


/**  nombre_animal,especie,edad,nacimiento,salud,PaisOrigen */

var Ganso= new Animal("Ganso Cenizo", "Aves",15, 2004, 95, "Oceania");
var Casuario = new Animal("Casuario", "Aves",15, 2004, 95, "Oceania");
var Panda = new Animal("Panda", "Mamifero",5, 2014, 100, "Asia");
var Koala = new Animal("Koala", "Mamifero",15, 2004, 95, "Oceania");
var Bongo = new Animal("Casuario", "Mamifero",3, 2016, 1, "Africa");

//Guardar en Areas

animalesArea1.push(Panda, Koala, Bongo);
animalesArea2.push(Ganso,Casuario);

let mamiferos = new AreaZoo("Mamiferos", "La principal característica de los mamíferos es que amamantan sus crías. Nacen ya formadas. Antes de ue la cria nazca crece en el vientre de su madre." , animalesArea1);
let aves = new AreaZoo("Aves", "Las aves no tienen dientes, tienen picos. Las aves tiene 4 extremidades, las posteriores son patas y las anteriores alas. Las alas y las plumas son fundamentales para que puedan volar y en algunos casos también para que puedan nadar." , animalesArea2);


var areas = [];
areas.push(mamiferos);
areas.push(aves);

// Añado las areas a los zoo
MiZoo.addArea(mamiferos);
MiZoo.addArea(aves);

