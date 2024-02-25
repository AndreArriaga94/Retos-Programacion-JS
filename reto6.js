/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

function fntReto6(){

    strUrl = 'https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210627185640/Vaporeon.png';

    fetch(strUrl)
        .then(response => response.blob())
        .then(blob => {
            let imgRatio = '';
            let imgImage = new Image();
            
            imgImage.src = URL.createObjectURL(blob);

            imgRatio = imgImage.width / imgImage.height;

            console.log(imgRatio)
        })
        .catch(error => {
            console.error("Error loading the image:", error)
        });
}

var img = new Image();
img.onload = function () { 
    alert("height: " + img.height + " width:" + img.width); 
};
img.src = "https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210627185640/Vaporeon.png";