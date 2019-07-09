class Empresa {
    constructor(nombre, eslogan, negocio){
        this._nombre = nombre;
        this._eslogan = eslogan;
        this._negocio = negocio;
    }

    pintar(){
        document.querySelector("#nombreEmpresa").innerText = this._nombre;
        document.querySelector("#fraseEmpresa").innerText = this._eslogan;
        document.querySelector("#negocioEmpresa").innerText = this._negocio;
    }
}

class Direccion {
    constructor(street, suite,city, zipcode, geo,lat,lng){
        this._street = street;
        this._suite = suite;
        this._city = city;
        this._zipcode = zipcode;
        this._geo = geo;
        this._lat = lat;
        this._lng =lng;
    }

    pintar(){
        document.querySelector("#streetEmpleado").innerText = this._street;
        document.querySelector("#suiteEmpleado").innerText = this._suite;
        document.querySelector("#cityEmpleado").innerText = this._city;
        document.querySelector("#zipcodeEmpleado").innerText = this._zipcode;
        document.querySelector("#geoEmpleado").innerText = this._geo;
        document.querySelector("#LatEmpleado").innerText = this._lat;
        document.querySelector("#LogEmpleado").innerText = this._lng;

    }
}
class Usuario {
    constructor(id, nombre, email, empresa, direccion){
        this._id = id;
        this._nombre = nombre;
        this._email = email;
        this._empresa = empresa;
        this._direccion = direccion;
    }

    pintar() {
        let fila = document.createElement("tr");
        let contenidoFila = `
            <td>${ this._id }</td>
            <td>${ this._nombre }</td>
            <td>${ this._email }</td>
            <td><button id="verDireccion" class="boton">VER</button></td>
            <td><button id="verEmpresa" class="boton">VER</button></td>
        `;
        fila.innerHTML = contenidoFila;

        fila.querySelector("#verEmpresa").addEventListener("click", () => {
            this._empresa.pintar();
        });

        fila.querySelector("#verDireccion").addEventListener("click", () => {
            this._direccion.pintar();
        });

        // INSERTO LA FILA EN LA TABLA
        let tableBody = document.querySelector("#usersTableBody");
        tableBody.appendChild(fila);
    }

}
class Agenda {
    constructor(){
        this._usuarios = [];
    }

    aniadirUsuario(usuario) {
        // Añade un usuario a la agenda
        this._usuarios.push(usuario);
    }

    pintarListadoUsuarios() {
        for(let user of this._usuarios) {
            user.pintar();
        }
    }

    rellenarConDatosDeLaApi(){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {

                return response.json();
            })
            .then((data) => {
                for(let userData of data) {
                    let empresa = new Empresa(userData.company.name, userData.company.catchPhrase, userData.company.bs);
                    let direccion = new Direccion (userData.address.street, userData.address.suite, userData.address.city, userData.address.zipcode, userData.address.geo, userData.address.geo.lat, userData.address.geo.log);
                    this.aniadirUsuario(new Usuario(userData.id, userData.name, userData.email, empresa, direccion));    
                }
            });
    }
}

let miNuevaAgenda = new Agenda();
miNuevaAgenda.rellenarConDatosDeLaApi();

setTimeout(()=> miNuevaAgenda.pintarListadoUsuarios(), 2000);