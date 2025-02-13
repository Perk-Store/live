const enterBtn = document.getElementById('enterBtn');
const snow = document.getElementById('snow');
const audio = document.getElementById('bgMusic');

enterBtn.addEventListener('click', () => {
    document.body.style.background = `url('pics/me3.jpg') no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    enterBtn.style.opacity = '0';
    snow.style.opacity = '1';

    setTimeout(() => {
        enterBtn.style.display = 'none';
        audio.play();
    }, 500);
});

// Snow effect script
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
                    "random": true, "straight": false, "out_mode": "out",
                    "bounce": false, "attract": { "enable": true, "rotateX": 300, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "events": { "onhover": { "enable": false }, "onclick": { "enable": true }, "resize": false }
            },
            "retina_detect": true
        });
    };
    document.head.append(script);
});
