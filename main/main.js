const enterBtn = document.getElementById('enterBtn');
const content = document.getElementById('content');
const bgAudio = document.getElementById('bgAudio');
const typeText = document.getElementById('typeText');

const texts = ["2$ for 14 boosts?", "discord.gg/ethicalmarket", "#1 cheapest seller"];
let index = 0, char = 0, deleting = false;

function typeEffect() {
    if (!deleting && char < texts[index].length) {
        typeText.textContent += texts[index][char++];
        setTimeout(typeEffect, 100);
    } else if (!deleting && char === texts[index].length) {
        setTimeout(() => { deleting = true; typeEffect(); }, 1500);
    } else if (deleting && char > 0) {
        typeText.textContent = texts[index].substring(0, --char);
        setTimeout(typeEffect, 50);
    } else {
        deleting = false;
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 500);
    }
}

enterBtn.addEventListener('click', () => {
    enterBtn.style.display = 'none';
    content.style.display = 'block';
    bgAudio.play();
    typeEffect();
});

// Snow Effect
document.addEventListener('DOMContentLoaded', function () {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        particlesJS("snow", {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 800 }},
                "color": { "value": "#ffffff" },
                "opacity": { "value": 0.7, "random": true, "anim": { "enable": true }},
                "size": { "value": 2.3, "random": true, "anim": { "enable": true }},
                "line_linked": { "enable": false },
                "move": {
                    "enable": true, "speed": 5, "direction": "bottom",
                    "random": true, "straight": false, "out_mode": "out"
                }
            },
            "interactivity": {
                "events": { "onclick": { "enable": true }, "resize": false }
            },
            "retina_detect": true
        });
    };
    document.head.append(script);
});
