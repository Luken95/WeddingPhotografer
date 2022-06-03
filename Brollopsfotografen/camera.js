const cameraButton = document.querySelector('#start-camera');
const videoElem = document.querySelector('#camera');
const takePictureButton = document.querySelector('#takePicture');
const canvas = document.querySelector('#picture');
const galleryElem = document.querySelector('#gallery');

const videoDiv = document.querySelector('#videoDiv');
const PictureDiv = document.querySelector('#pictureDiv');
const newPic = document.querySelector('#newPicture');
let notificationButton = document.getElementById('notificationButton');

let notificationPermission = '';

const ctx = canvas.getContext('2d');
let stream;
let images

if (localStorage.getItem('cameraApp') !== null) {
    images =  JSON.parse(localStorage.getItem('cameraApp'));
}else{
    images = [];
}

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true}).then((stream) => {
    videoElem.srcObject = stream;
    videoElem.play();
})}

newPicture.addEventListener('click', () => {
    PictureDiv.style.display='none' 
    videoDiv.style.display='flex' 
})

takePictureButton.addEventListener('click', () => {
    ctx.drawImage(videoElem, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/png');
    videoDiv.style.display='none' 
    PictureDiv.style.display='flex' 

    images.push({
        id: images.length,
        image: imageData        
    });
    localStorage.setItem('cameraApp', JSON.stringify(images));
    showNotification();
});

function showNotification(){
    text = "Din bild sparades i galleriet!";
    const icon = 'icons/smallcamera.png';
    const notification = new Notification('Bröllopsfotografen', { body: text, icon });
    notification.addEventListener('click', () => {
        window.open('https://localhost:443')
    })
}

function requestNotification(){ 
    Notification.requestPermission().then((permission) => {
        notificationPermission = permission;
    })
}

const toGallery = document.getElementById('gallery-btn');
function Images(){
    window.location.href = 'gallery.html';
}

requestNotification();

