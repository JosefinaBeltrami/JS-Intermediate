/** COMO ESTA FORMADO EL JSON
 *   "latitude":39.556,
      "url":"http://livecam-pro.com/fileadmin/templates/assets/_html/livecamX.026.html",
      "type":"",
      "name":"Palma - Hotel Horizonte",
      "longitude":2.622
 */

function makeRequest() {
    let httpRequest = new XMLHttpRequest();

    function handleResponse(response) {
        if (httpRequest.readyState ===4) {
            if (httpRequest.status===200) {
                Webcams = JSON.parse(httpRequest.responseText);
                console.log (Webcams);
                /** Crear la tabla de los coches 
                 * crear una tabla
                */

                for (let index=0; index < Webcams.length; index++){
                    let Webcam = Webcams [index];
                    console.log (Webcam);
                    let fila = document.createElement ("tr");
                    let celdas1 = document.createElement ("td");
                    let celdas2 = document.createElement ("td");
                    let celdas3 = document.createElement ("td");
                    let celdas4 = document.createElement ("td");
                    let celdas5 = document.createElement ("td");
                    celdas1.innerText = Webcam.latitude;
                    celdas2.innerText = Webcam.url;
                    celdas3.innerText = Webcam.type;
                    celdas4.innerText = Webcam.name;
                    celdas5.innerText = Webcam.longitude;
                    fila.appendChild (celdas1);
                    fila.appendChild (celdas2);
                    fila.appendChild (celdas3);
                    fila.appendChild (celdas4);
                    fila.appendChild (celdas5);
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
    httpRequest.open ("GET", "https://api.oceandrivers.com:443/v1.0/getWebCams");
    httpRequest.send();
};

makeRequest();