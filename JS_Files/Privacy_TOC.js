  // Privacy
  const privacyLink = document.getElementById('privacy-link');
  const privacyModal = document.getElementById('privacy-modal');
  const closePrivacy = document.getElementById('close-privacy');

  privacyLink.addEventListener('click', function(e) {
    e.preventDefault();
    privacyModal.style.display = 'flex';
  });

  closePrivacy.addEventListener('click', function() {
    privacyModal.style.display = 'none';
  });

  // Optional: close modal if clicking outside content
  privacyModal.addEventListener('click', function(e) {
    if (e.target === privacyModal) {
      privacyModal.style.display = 'none';
    }
  });


  // Terms of Use

  const termsLink = document.getElementById('terms-link');
  const termsModal = document.getElementById('terms-modal');
  const closeTerms = document.getElementById('close-terms');

  termsLink.addEventListener('click', function(e) {
    e.preventDefault();
    termsModal.style.display = 'flex';
  });

  closeTerms.addEventListener('click', function() {
    termsModal.style.display = 'none';
  });

  termsModal.addEventListener('click', function(e) {
    if (e.target === termsModal) {
      termsModal.style.display = 'none';
    }
  });