// back-to-top.js

// Create Back to Top button
const backToTop = document.createElement('a');
backToTop.href = '#top';
backToTop.className = 'back-to-top';
backToTop.title = 'Back to Top';
backToTop.innerHTML = '&#8679;'; // up arrow

document.body.appendChild(backToTop);

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
