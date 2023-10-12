document.addEventListener("mousemove", (e) => {
    const customCursor = document.querySelector(".custom-cursor");
    
    // Update the position of the custom cursor based on the mouse cursor
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
});

document.addEventListener("mousemove", (e) => {
    const customCursor = document.querySelector(".custom-cursor");
    customCursor.style.display = "block"; // Show the cursor
    
    // Update the position of the custom cursor based on the mouse cursor
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
});

document.addEventListener("mouseout", () => {
    const customCursor = document.querySelector(".custom-cursor");
    customCursor.style.display = "none"; // Hide the cursor when the mouse leaves the window
});
