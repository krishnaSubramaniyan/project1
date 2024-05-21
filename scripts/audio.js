document.querySelectorAll('.pcontainer').forEach(container => {
  container.addEventListener('click', function() {
    const card = this.querySelector('.card');
    card.classList.toggle('flipped');
  });
});
//ends
// Get the checkbox input and the speaker elements
const checkboxInput = document.getElementById('checkboxInput');
const audio = document.getElementById('myAudio');
const speaker = document.querySelector('.speaker');
const muteSpeaker = document.querySelector('.mute-speaker');

// Add event listener to the checkbox input
checkboxInput.addEventListener('change', function() {
    // If checkbox is checked, show the speaker icon and hide the mute speaker icon
    if (this.checked) {
        speaker.style.opacity = '1';
        muteSpeaker.style.opacity = '0';
        // Play audio
        audio.play();
    } else {
        // If checkbox is not checked, hide the speaker icon and show the mute speaker icon
        speaker.style.opacity = '0';
        muteSpeaker.style.opacity = '1';
        // Pause audio
        audio.pause();
    }
});