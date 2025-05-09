$(document).ready(function () {
    // Counter
    const counters = document.querySelectorAll('.countup__num');
    let animated = false;

    const options = {
        threshold: 0.5
    };

    const animateCount = (el, target) => {
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const step = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            el.textContent = Math.floor(progress * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        };

        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                counters.forEach(counter => {
                    const target = parseInt(counter.textContent.replace(/[^\d]/g, ''), 10);
                    animateCount(counter, target);
                });
                animated = true;
                observer.disconnect(); // зупиняємо після першого разу
            }
        });
    }, options);

    const trigger = document.querySelector('.countup');
    if (trigger) observer.observe(trigger);



    // menu burger
 
})