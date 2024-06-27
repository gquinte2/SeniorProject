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


  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

   
        let formData = new FormData(form);

        // Send form data via AJAX
        fetch('/send_email', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Display custom popup message
            alert("Thank you for reaching out! I'll be in touch soon."); 
            form.reset(); // Clear form 
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Oops! Something went wrong.'); // Display error message 
        });
    });
});