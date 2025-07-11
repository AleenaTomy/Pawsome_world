const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery-grid img, .hero-gallery img');
let currentIndex = -1;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;

    // Remove old image
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }

    lightbox.appendChild(img);
    currentIndex = index;

    // Add arrows
    addNavigation();
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});

// Add next and previous buttons
function addNavigation() {
  const prev = document.createElement('button');
  prev.innerHTML = '&#8592;';
  prev.classList.add('lightbox-prev');
  prev.addEventListener('click', showPrev);

  const next = document.createElement('button');
  next.innerHTML = '&#8594;';
  next.classList.add('lightbox-next');
  next.addEventListener('click', showNext);

  lightbox.appendChild(prev);
  lightbox.appendChild(next);
}

function showNext(e) {
  if (e) e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  updateLightboxImage();
}

function showPrev(e) {
  if (e) e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightboxImage();
}

function updateLightboxImage() {
  const img = lightbox.querySelector('img');
  img.src = images[currentIndex].src;
}

// Arrow key navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'ArrowRight') {
    showNext();
  } else if (e.key === 'ArrowLeft') {
    showPrev();
  } else if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});
