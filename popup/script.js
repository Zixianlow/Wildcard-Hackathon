// script.js
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');
const popupContainer = document.getElementById('popupContainer');

// Function to set a cookie with a given name and value
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get the value of a cookie by name
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

function openPopup() {
    // Generate random top and left positions
    popupContainer.style.display = 'block';
    setTimeout(() => {
        popup.style.transform = 'scale(1)';
    }, 10);
}

function closePopup() {
    popup.style.transform = 'scale(0)';
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 4000);
    setCookie('popupClosed', 'true', 1); // 1 day
}

openPopupButton.addEventListener('click', openPopup);

// Add an event listener to close the popup when clicking the "x"
closePopupButton.addEventListener('click', closePopup);

// Function to open the popup every 2 minutes if the user has not closed it
function openPopupAutomatically() {
    const popupClosed = getCookie('popupClosed');
    if (!popupClosed) {
        openPopup();
    }
}

// Open the popup immediately
openPopupAutomatically();

// Set an interval to open the popup every 2 minutes if the user has not closed it
setInterval(openPopupAutomatically, 10 * 1000);

// Remove the interval that moves and shows the popup every 5 seconds
