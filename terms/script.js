// Get the link and the pop-up elements
const termsPopupLink = document.getElementById('terms-popup-link');
const termsPopup = document.getElementById('terms-popup');
const termsClosePopup = document.getElementById('terms-close-popup');

// When the link is clicked, show the pop-up
termsPopupLink.addEventListener('click', () => {
    termsPopup.style.display = 'block';
});

// When the close button is clicked, hide the pop-up
termsClosePopup.addEventListener('click', () => {
    termsPopup.style.display = 'none';
});

