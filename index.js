texts = document.querySelectorAll('.text');
mainTitle = document.getElementById('main-title-wrap');
titles = document.querySelectorAll('.title-overlay');

function scrollAnim() {
    for (var i = 0; i <texts.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = texts[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            texts[i].classList.add('active');
        } else {
            texts[i].classList.remove('active');
        }
    }

    for (var i = 0; i <titles.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = titles[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            titles[i].classList.add('active');
        } else {
            titles[i].classList.remove('active');
        }
    }
}

window.addEventListener("scroll", scrollAnim);
scrollAnim();

window.addEventListener('DOMContentLoaded', () => {
    mainTitle.classList.add('active');
})