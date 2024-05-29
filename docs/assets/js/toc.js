document.addEventListener("DOMContentLoaded", function() {
  const toggles = document.querySelectorAll(".toggle-section");
  
  toggles.forEach(toggle => {
    toggle.addEventListener("click", function(event) {
      event.preventDefault();
      const nextElement = this.nextElementSibling;
      
      if (nextElement && nextElement.classList.contains("section")) {
        nextElement.classList.toggle("active");
      }
    });
  });
});
