const audioPlayer = document.getElementById('first-audio');
const readButton = document.getElementById('read-aloud');
readButton.addEventListener('click', function() {
    
    if (audioPlayer.paused) {
        audioPlayer.play();
        readButton.textContent = '⏸ Pause Reading';
    } else {
        audioPlayer.pause();
        readButton.textContent = '🔊 Read Aloud';
    }
});
