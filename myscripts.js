'use strict'

function openGallery(galleryId) {
    var galleryOverlay = document.getElementById(galleryId + "Overlay");
    galleryOverlay.style.display = "block";
}

// Function to close a specific gallery
function closeGallery(galleryId) {
    var galleryOverlay = document.getElementById(galleryId + "Overlay");
    galleryOverlay.style.display = "none";
}

