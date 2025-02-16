document.addEventListener('DOMContentLoaded', function () {
    // Load particles.js for snow effect
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        particlesJS("snow", {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "opacity": { "value": 0.7, "random": true, "anim": { "enable": true } },
                "size": { "value": 2.3, "random": true, "anim": { "enable": true } },
                "line_linked": { "enable": false },
                "move": { "enable": true, "speed": 5, "direction": "bottom", "random": true, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": { "events": { "onhover": { "enable": false }, "onclick": { "enable": true }, "resize": false } },
            "retina_detect": true
        });
    };
    document.head.append(script);

    const enterButton = document.getElementById('enterButton');
    const enterScreen = document.getElementById('enterScreen');
    const mainContent = document.getElementById('mainContent');
    const audioPlayer = document.getElementById('audioPlayer');
    const albumArt = document.getElementById('albumArt');

    let songIndex = 0;
    const songs = [
        { file: "audio/bg1.mp3", art: "audiopfp/bg1.png" },
        { file: "audio/bg2.mp3", art: "audiopfp/bg2.png" },
        { file: "audio/bg3.mp3", art: "audiopfp/bg3.png" },
        { file: "audio/bg4.mp3", art: "audiopfp/bg4.png" },
        { file: "audio/bg5.mp3", art: "audiopfp/bg5.png" }
    ];

    function loadSong(index) {
        audioPlayer.src = songs[index].file;
        albumArt.src = songs[index].art;
        audioPlayer.play();
    }

    enterButton.addEventListener('click', () => {
        // Fade out enter screen
        enterScreen.style.transition = 'opacity 1s ease';
        enterScreen.style.opacity = '0';

        // Start playing music immediately
        loadSong(songIndex);

        setTimeout(() => {
            enterScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.opacity = '0'; // Ensure it's initially hidden

            setTimeout(() => {
                mainContent.style.transition = 'opacity 1s ease';
                mainContent.style.opacity = '1';
                startTypingEffect();

                // Fade in linkboxes one by one
                document.querySelectorAll('.linkbox').forEach((link, index) => {
                    setTimeout(() => {
                        link.classList.add('show');
                    }, index * 200);
                });
            }, 100);
        }, 1000);
    });

    // Typing effect function
    function startTypingEffect() {
        const textElement = document.getElementById('typingText');
        const texts = ["2$ for 14 boosts?", "discord.gg/ethicalmarket", "#1 cheapest seller"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            let currentText = texts[textIndex];
            textElement.innerText = currentText.substring(0, charIndex);

            if (!isDeleting) {
                if (charIndex < currentText.length) {
                    charIndex++;
                    setTimeout(type, 100);
                } else {
                    isDeleting = true;
                    setTimeout(type, 1500);
                }
            } else {
                if (charIndex > 0) {
                    charIndex--;
                    setTimeout(type, 50);
                } else {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    setTimeout(type, 500);
                }
            }
        }

        type();
    }

    // Music Player Controls
    const playPauseButton = document.getElementById('playPauseButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const volumeSlider = document.getElementById('volumeSlider');

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

    // Auto-change album art when song ends
    audioPlayer.addEventListener('ended', () => {
        songIndex = (songIndex + 1) % songs.length;
        loadSong(songIndex);
    });

    // 🌀 DVD Visual Movement
    let dvdX = 50, dvdY = 50, dvdSpeedX = 2, dvdSpeedY = 2;
    
    function moveDVD() {
        const dvd = document.getElementById('dvdVisual');
        const container = document.body;
        const maxX = container.clientWidth - dvd.clientWidth;
        const maxY = container.clientHeight - dvd.clientHeight;

        dvdX += dvdSpeedX;
        dvdY += dvdSpeedY;

        if (dvdX <= 0 || dvdX >= maxX) {
            dvdSpeedX *= -1;
        }
        if (dvdY <= 0 || dvdY >= maxY) {
            dvdSpeedY *= -1;
        }

        dvd.style.left = dvdX + "px";
        dvd.style.top = dvdY + "px";

        requestAnimationFrame(moveDVD);
    }

    moveDVD();
});
