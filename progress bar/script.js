function updateProgressBar(percentage) {
    const progressBar = document.getElementById("myProgressBar");
    const progress = document.getElementById("progress");
    progressBar.style.width = percentage + "%";
    if (percentage <= 30)
        progressBar.innerHTML = percentage + "%<br>(Childhood)";
    else if (percentage <= 70)
        progressBar.innerHTML = percentage + "%<br>(Adult)";
    else
        progressBar.innerHTML = percentage + "%<br>(Old)";
}

let currentProgress = 0;
const targetProgress = 100;
const duration = 120000; // 12 seconds in milliseconds
const increment = 1; // Increase by 1% on each interval
const intervalDuration = (duration / targetProgress) * increment;

// Update the progress bar at regular intervals
const progressBarInterval = setInterval(function() {
    currentProgress += increment;
    if (currentProgress == 100)
        currentProgress -= 100;
    if (currentProgress <= targetProgress) {
        updateProgressBar(currentProgress);
    } else {
        clearInterval(progressBarInterval);
    }
}, intervalDuration);