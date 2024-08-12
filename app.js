const shareBtn = document.querySelector('[data-share]');
const shareOverlay = document.querySelector('[data-share-overlay]');

/* Display overlay on screen */
const showOverlay = () => {
    // shareBtn.style.pointerEvents = 'none';
    if (shareOverlay.classList.contains('active')) {
        shareOverlay.classList.remove('active');
        shareOverlay.classList.add('close');
        shareBtn.classList.remove('active');
    } else {
        shareOverlay.classList.remove('close');
        shareOverlay.classList.add('active');
        shareBtn.classList.add('active');
    }
}


//Disable shareBtn for 1000ms after being clicked - to prevent spamming
const disabBtn = () => {
    shareBtn.disabled = true;
    setTimeout(function() {
        shareBtn.disabled = false
    }, 1000)
};


//Remove all active classes i.e. Overlay and btn whilst the window is being resized
const removeActiveOverlay =  () => {
    // shareBtn.style.pointerEvents = 'auto';
    shareOverlay.classList.remove('close');
    shareOverlay.classList.remove('active');
    shareBtn.classList.remove('active')
}

//Remove Overlay when a social btn or any part of the container has been clicked
const removeOverlay = () => {
    shareOverlay.classList.add('close');
    shareOverlay.classList.remove('active');
    shareBtn.classList.remove('active')
}




//Event Listeners
shareBtn.addEventListener('click', showOverlay);
window.addEventListener('resize', removeActiveOverlay);
shareOverlay.addEventListener('click', removeOverlay);
shareBtn.addEventListener('click', disabBtn);
