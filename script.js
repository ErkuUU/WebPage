function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function toggleMenuAndNavigateToContact() {
  toggleMenu(); // Call the toggleMenu function to open/close the menu
  scrollToContact(); // Call a function to scroll to the contact section
}

function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
