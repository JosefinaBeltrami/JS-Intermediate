function makeRequest() {
    let httpRequest = new XMLHttpRequest();

    function handleResponse(response) {
        if (httpRequest.readyState ===4) {
            if (httpRequest.status===200) {
                console.log (JSON.parse(httpRequest.responseText))
            } else {
                alert ("there was an error");
            }
        }
    }
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open ("GET", "http://parallelum.com.br/fipe/api/v1/carros/marcas");
    httpRequest.send();
};

makeRequest();
