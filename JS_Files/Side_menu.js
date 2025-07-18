const menuToggle = document.getElementById('side-menu-toggle');
const sideMenu = document.querySelector('.side-menu');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent click bubbling
  sideMenu.classList.toggle('open');
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('dark-mode');
  });
}

// Close side menu when clicking outside
document.addEventListener('click', (e) => {
  if (
    sideMenu.classList.contains('open') &&
    !sideMenu.contains(e.target) &&
    e.target !== menuToggle
  ) {
    sideMenu.classList.remove('open');
  }
});
