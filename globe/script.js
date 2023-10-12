const openBtn = document.getElementById('openBtn');
const popupContainer = document.getElementById('popupContainer');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');

openBtn.addEventListener('click', () => {
    popupContainer.style.display = 'block';
    setTimeout(() => {
        popup.style.transform = 'scale(1)';
    }, 10);
});

closeBtn.addEventListener('click', () => {
    popup.style.transform = 'scale(0)';
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 4000); // Wait for 2 seconds before hiding the container
});
