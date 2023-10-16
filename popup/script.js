const closePopupButton = document.getElementById('close-popup');
const popupContainer = document.getElementById('popupContainer');

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

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
    setCookie('popupClosed', 'true', 1);
}

closePopupButton.addEventListener('click', closePopup);

function openPopupAutomatically() {
    const popupClosed = getCookie('popupClosed');
    if (!popupClosed) {
        openPopup();
    }
}

openPopupAutomatically();
setInterval(openPopupAutomatically, 25 * 1000);