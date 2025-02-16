document.addEventListener('DOMContentLoaded', function () {
    // 🎵 Music Player Logic
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const volumeSlider = document.getElementById('volumeSlider');

    let songIndex = 0;
    const songs = [
        "audio/bg1.mp3",
        "audio/bg2.mp3",
        "audio/bg3.mp3",
        "audio/bg4.mp3",
        "audio/bg5.mp3"
    ];

    function loadSong(index) {
        audioPlayer.src = songs[index];
        audioPlayer.play();
    }

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    prevButton.addEventListener('click', () => {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songIndex);
    });

    nextButton.addEventListener('click', () => {
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songIndex);
    });

    volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value;
    });

    loadSong(songIndex); // Auto play first song

    // 🔍 Product Filtering Logic
    const filterButtons = document.querySelectorAll('.filter');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            productCards.forEach(card => {
                if (category === 'All' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
