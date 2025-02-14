document.addEventListener('DOMContentLoaded', function () {
    const enterScreen = document.getElementById('enterScreen');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');
    const enterButton = document.getElementById('enterButton');

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
