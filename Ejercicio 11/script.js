/** disponer de 2 peticiones, la primera devuelve un listado de album, y la segunda devuelve un listado de fotos,
 * utilizar fetch, promesas y clases, que te pinde un listado de albums, cuando hagas un click  en uno de ellos se debe hacer una peticion a las fotos. 
 *  pintar un perqueno muro como instagram
 */
class Albums {
    constructor() {
        this._albums = [];
    }

    fetchDataAlbums() {
          
         return fetch("https://jsonplaceholder.typicode.com/albums")
            .then( response => response.json())
            
    }

    drawUrl(albums) {
        
        const albumWrapper = document.querySelector(".album-info");
        let html = "";
        albums.forEach(url => {
            html += `
            <li class"url">
            <a href="#!" data-id="${url.id}">${url.title}</a>
            </li>
            `
        });
        albumWrapper.innerHTML = html;
       
    }

    getPhotosByAlbumId(id){
        fetch('https://jsonplaceholder.typicode.com/photos?albumId='+ id)
        
        .then(response => response.json())
        .then(photos => this.drawPhotos(photos))
        

    }

    drawPhotos(photos){
        console.log(photos);
        const photoWrapper = document.querySelector("#album-fotos");
        let html = "";
        
        photos.forEach(photo => {
            html += `
            <img src="${photo.url}" width="100%" />
            `
        });
        photoWrapper.innerHTML = html;
    }

}

let init = () => {
    let album = new Albums();
    album.fetchDataAlbums()
      .then(
        albums => {   
            album.drawUrl(albums)
            let albumWrapper = document.querySelectorAll(".album-info a");
            albumWrapper.forEach(item => {

            item.addEventListener("click", e => {
                e.preventDefault(); 
                
                const id = item.getAttribute("data-id")
                album.getPhotosByAlbumId(id);
                    })
            });
            
        }
        
    )
}
window.addEventListener("load", init)





