const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

// Check if localStorage has saved progress
const savedProgress = localStorage.getItem('movieProgress');
if (savedProgress) {
  videoPlayer.currentTime = parseFloat(savedProgress);
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('movieProgress', videoPlayer.currentTime);
}

// Load a new movie from a progress file
function loadMovieProgress(input) {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const progress = parseFloat(e.target.result);
      videoPlayer.currentTime = progress;
      localStorage.setItem('movieProgress', progress);
    };
    reader.readAsText(file);
  }
}
