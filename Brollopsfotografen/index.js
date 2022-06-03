const div = document.getElementById('onclickdiv');

function toCamera() {
    window.location.href = 'camera.html';
}

window.addEventListener('load', async () => {
    if('serviceWorker' in navigator){
        try {
            await navigator.serviceWorker.register('service-worker.js');
        } catch(err) {
            console.error('Whooopsie!', err)
        }
    }
});


