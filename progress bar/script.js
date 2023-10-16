function updateProgressBar(percentage) {
    const progressBar = document.getElementById("myProgressBar");
    const progress = document.getElementsByClassName("progress-bar");
    progressBar.style.width = percentage + "%";
    if (percentage <= 15)
    {
        progressBar.innerHTML = percentage + "%<br>(Childhood)";
        progressBar.style.backgroundColor = "darkgreen";
    }
    else if (percentage <= 30)
    {
        progressBar.innerHTML = percentage + "%<br>(Adolescent)";
        progressBar.style.backgroundColor = "green";
    }
    else if (percentage <= 70)
    {
        progressBar.innerHTML = percentage + "%<br>(Adult)";
        progressBar.style.backgroundColor = "yellow";
    }
    else if (percentage <= 85)
    {
        progressBar.innerHTML = percentage + "%<br>(Getting Old...)";
        progressBar.style.backgroundColor = "orange";
    }
    else
    {
        progressBar.innerHTML = percentage + "%<br>(Old)";
        progressBar.style.backgroundColor = "red";
    }
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