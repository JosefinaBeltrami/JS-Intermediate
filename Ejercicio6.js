function makeRequest() {
    let httpRequest = new XMLHttpRequest();

    function handleResponse(response) {
        if (httpRequest.readyState ===4) {
            if (httpRequest.status===200) {
                coches = JSON.parse(httpRequest.responseText);
                console.log (coches);
                /** Crear la tabla de los coches 
                 * crear una tabla
                */

                for (let index=0; index < coches.length; index++){
                    let coche = coches [index];
                    console.log (coche);
                    let fila = document.createElement ("tr");
                    let celdas1 = document.createElement ("td");
                    let celdas2 = document.createElement ("td");
                    celdas1.innerText = coche.codigo;
                    celdas2.innerText = coche.nome;
                    fila.appendChild (celdas1);
                    fila.appendChild (celdas2);

                    let tableBody = document.querySelector(".table-body");
                    tableBody.appendChild(fila);   
                }
            } 
            else {
                alert ("there was an error");
            }
        }
    }
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open ("GET", "http://parallelum.com.br/fipe/api/v1/carros/marcas");
    httpRequest.send();
};

makeRequest();
