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

