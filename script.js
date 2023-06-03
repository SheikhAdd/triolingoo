// JS object and its properties
let course = {
  name: 'French',
  level: 'Intermediate',
  duration: '3 months'
};

console.log(course);

// Selectors, methods, and events
let logo = document.querySelector(".logo");
let courseContainers = document.querySelectorAll(".container");
let submitButton = document.querySelector(".submit");

// Event listeners: click, mouseover, keypress
logo.addEventListener('click', function() {
  alert('Welcome to Triolingo');
});

logo.addEventListener('mouseover', function(event) {
  event.target.style.color = 'purple';
});

logo.addEventListener('mouseout', function(event) {
  event.target.style.color = 'white';
});

courseContainers.forEach((container) => {
  container.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
  });

  container.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  let commentBox = document.querySelector("textarea[name='comment']");
  if (commentBox.value !== '') {
    alert('Comment submitted');
  } else {
    alert('Please enter a comment');
  }
});

// JS functions to create animations
courseContainers.forEach((container) => {
  container.addEventListener('mouseover', function() {
    this.style.transition = 'all 0.5s';
    this.style.transform = 'scale(1.05)';
  });

  container.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});

// Animation using JS function
let mainHeading = document.querySelector('.main-content h1');
let size = 24;
setInterval(function() {
  if (size <= 30) {
    size++;
    mainHeading.style.fontSize = size + 'px';
  } else {
    size = 24;
  }
}, 500);

var audio = null; // Declare a variable to hold the audio element

function playAudio() {
  if (audio && !audio.paused) {
    // If audio is playing, pause it
    audio.pause();
  } else {
    // If audio is not playing or paused, create and play the audio
    audio = new Audio('audio_file.mp3');
    audio.play();
  }
}

var linkTag = document.getElementById('your-link-id');

// Attach the click event listener to the link
linkTag.addEventListener('click', playAudio);
