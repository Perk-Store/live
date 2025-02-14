document.addEventListener('DOMContentLoaded', function () {
    const enterScreen = document.getElementById('enterScreen');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');
    const enterButton = document.getElementById('enterButton');

    // Start snow effect immediately
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

    // Enter button functionality
    enterButton.addEventListener('click', () => {
        enterScreen.style.transition = 'opacity 0.5s ease';
        enterScreen.style.opacity = '0';

        setTimeout(() => {
            enterScreen.style.display = 'none';
            mainContent.style.display = 'flex';

            setTimeout(() => {
                mainContent.style.opacity = '1';
                bgMusic.play();
                startTypingEffect();
            }, 100);
        }, 500);
    });

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
});
