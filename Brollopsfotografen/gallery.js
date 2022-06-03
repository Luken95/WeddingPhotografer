const galleryElem = document.querySelector('#gallery');
const toCamera = document.getElementById('camera-image');
const images = JSON.parse(localStorage.getItem('cameraApp'));
let stream;

function createImage(image, index) {
    const imageDiv = document.createElement('div');
    const imageElem = document.createElement('img', id="image");
    imageElem.setAttribute('src', image.image);
    imageElem.setAttribute('id', index);
    imageDiv.append(imageElem);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => {
        
        imageElem.remove(imageElem);
        deleteButton.remove(deleteButton);
        deleteImage(index);
    });
    imageDiv.appendChild(deleteButton); 
    galleryElem.appendChild(imageDiv);

}

function deleteImage(id){
    const newImages = JSON.parse(localStorage.getItem('cameraApp'));
    newImages.splice(id, 1);
    localStorage.setItem('cameraApp', JSON.stringify(newImages));

    console.log(newImages);
}

function removeItem() {
    const parent = this.parentNode.parentNode;
    const child = this.parentNode;
    parent.removeChild(child);
  }


  function getImages(images) {
    
    for (let i = 0; i < images.length; i++) {
        createImage(images[i], i);
    }
}

function Camera(){
    window.location.href = 'camera.html';
}

getImages(images);
