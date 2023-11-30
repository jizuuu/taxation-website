document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for Home link
  document.querySelector('a[href="#home"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToTop();
  });

  // Add event listeners for submenu links
  document.querySelector('a[href="#taxation"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('taxation');
  });

  document.querySelector('a[href="#preColonial"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('preColonial');
  });

  document.querySelector('a[href="#spanishEra"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('spanishEra');
  });

  document.querySelector('a[href="#americanEra"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('americanEra');
  });

  document.querySelector('a[href="#postWarCurrentEra"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('postWarCurrentEra');
  });

  document.querySelector('a[href="#references"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSection('references');
  });
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Function to scroll back to the top of the page (home)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
