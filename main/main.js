document.addEventListener('DOMContentLoaded', function () {
    // Initialize the snow effect
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

    // Enter button event listener
    document.getElementById('enterButton').addEventListener('click', () => {
        document.getElementById('enterScreen').style.opacity = '0';

        setTimeout(() => {
            document.getElementById('enterScreen').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            setTimeout(() => {
                document.getElementById('mainContent').style.opacity = '1';
                document.getElementById('bgMusic').play();
                document.body.style.backgroundImage = "url('pics/me3.jpg')";
                document.body.style.transition = "background-image 1s ease-in-out";
                startTypingEffect();
            }, 100);
        }, 500);
    });

    // Typing effect for the text
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
