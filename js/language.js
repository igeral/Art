const language = document.querySelector('.language')
localStorage.setItem('language', 'it')
const italian = document.querySelectorAll('.italian')
const english = document.querySelectorAll('.english')



language.addEventListener('click', function (e) {
    if (e.target.classList.contains('IT')) {
        localStorage.setItem('language', 'it');
    } else if (e.target.classList.contains('EN')) {
        localStorage.setItem('language', 'en');
    }

    changeLaguage();
})

function changeLaguage() {
    if (!english || !italian) return;
    if (localStorage.getItem('language') === 'en') {
        english.forEach(e => e.classList.remove('hidetext'));
        italian.forEach(i => i.classList.add('hidetext'))
    } else if (localStorage.getItem('language') === 'it') {
        italian.forEach(i => i.classList.remove('hidetext'));
        english.forEach(e => e.classList.add('hidetext'));
    }
}