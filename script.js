document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter1');
    let count = 0;
    const target = 2250; // Target number
    const duration = 6000; // Duration in milliseconds
    const increment = target / (duration / 100);

    function updateCounter() {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerHTML ='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ target+ '+<br><h6>Youtube Community</h6>';
        }
    }

    updateCounter();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                count = 0; // Reset count
                updateCounter();
            }
        });
    });

    observer.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter2');
    let count = 0;
    const target = 30000; // Target number
    const duration = 6000; // Duration in milliseconds
    const increment = target / (duration / 88);

    function updateCounter() {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerHTML ='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + target + '+ <br><h6>Facebook Followers</h6> ';
        }
    }

    updateCounter();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                count = 0; // Reset count
                updateCounter();
            }
        });
    });

    observer.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter3');
    let count = 0;
    const target = 6000; // Target number
    const duration = 6000; // Duration in milliseconds
    const increment = target / (duration / 70);

    function updateCounter() {
        count += increment;
        if (count < target) {
            counter.textContent = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+ target + '+ <br><h6>Telegram Members</h6> ';
        }
    }

    updateCounter();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                count = 0; // Reset count
                updateCounter();
            }
        });
    });

    observer.observe(counter);
});




document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});