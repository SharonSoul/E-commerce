const bar = document.querySelector('#bar')
const nav = document.querySelector('#navbar')
const close = document.querySelector('#close')

if (bar) {
    bar.addEventListener('click', function () {
        nav.classList.add('active')
    })
}

if(close) {
    close.addEventListener('click', function() {
        nav.classList.remove('active')
    })
}
