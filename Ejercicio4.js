class Tienda {
    constructor (nombre_tienda, horario) {
        this._Nombre = nombre_tienda;
        /** Empleado que su padre sera Persona */
        this._horario = horario;
        /** Cliente que su padre sera Persona */
    }
}

class Producto {
    constructor (nombre_producto, detalle, stock, precio) {
        this._NombreProd = nombre_producto;
        this._Detalle = detalle;
        this._Stock = stock;
        this._Precio = precio;
    }
}

class Persona {
    constructor (nombre, apellido, edad, sexo, direccion) {
        this._Nombre = nombre;
        this._Apellido = apellido;
        this._Edad = edad;
        this._Sexo = sexo;
        this._Direccion = direccion;
    }
}

class Empleado extends Persona {
    constructor (idempleado, puesto) {
        super();
        this._IdEmpleado = idempleado;
        this._Puesto = puesto;
     
    }

    AltaEmpleado (){
        var ListaEmpleado = [];
        var id_empleado = "";

        if (id_empleado != "FIN") {
            id_empleado = prompt("Ingresar Id Empleado --- Recuerdo que si ingresa FIN se termina la carga de datos");
            var indice_empleado = parseInt (id_empleado);
            this._IdEmpleado = indice_empleado;
            this._Nombre = prompt ("Ingrese el nombre del empleado");
            this._Apellido = prompt ("Inrese el Apellido del empleado");
            this._Puesto = prompt ("Ingrese el puesto del empleado");
        }                
    }
}

class Cliente extends Persona {
    constructor (idcliente) {
        super();
        this._IdCliente = idcliente;

        
    }
}


let mitienda = new Tienda();
let micliente =  new Cliente();
let miEmpleado = new Empleado();
let miproducto = new Producto();
miEmpleado.AltaEmpleado();

