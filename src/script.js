// Get the modal and elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.getElementsByClassName("close")[0];

// Add click event to each image
document.querySelectorAll(".clickable-image").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});