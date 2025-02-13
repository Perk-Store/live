document.addEventListener('DOMContentLoaded', () => {
    const txt = document.getElementById('typewriter');
    const words = ["2$ for 14 boosts?", "discord.gg/ethicalmarket", "#1 cheapest seller"];
    let i = 0, j = 0, isDeleting = false, speed = 100;

    function type() {
        txt.innerText = words[i].substring(0, j);
        if (!isDeleting && j < words[i].length) {
            j++;
        } else if (isDeleting && j > 0) {
            j--;
        } else if (!isDeleting && j === words[i].length) {
            isDeleting = true;
            speed = 1000;
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            speed = 100;
            i = (i + 1) % words.length;
        }
        setTimeout(type, speed);
    }

    type();

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
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": true, "rotateX": 300, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": { "enable": false },
                    "onclick": { "enable": true },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    };
    document.head.append(script);
});
