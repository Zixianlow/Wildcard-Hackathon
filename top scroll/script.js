window.addEventListener("scroll", () => {
    // Calculate how far down the page is scrolled
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Set a threshold for scrolling (e.g., 90% from the top)
    const scrollThreshold = scrollHeight - clientHeight;

    // If the scroll position is near the bottom, scroll to the top
    if (scrollPosition >= scrollThreshold * 0.95) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

// Hook into the page refresh and back navigation events
window.addEventListener('beforeunload', function() {
    deleteAllCookies();
});
