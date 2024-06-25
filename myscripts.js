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

function showSection(sectionId) {
    // Hide all content sections
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
    }
    
    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.classList.add('active');
    }
  }