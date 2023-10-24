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

// Single Products
let mainImg = document.querySelector('#main-img')
let smallImg = document.querySelectorAll('.small-img')

smallImg[0].addEventListener('click', function(e) {
    mainImg.src = smallImg[0].src
})

smallImg[1].addEventListener('click', function(e) {
    mainImg.src = smallImg[1].src
})

smallImg[2].addEventListener('click', function(e) {
    mainImg.src = smallImg[2].src
})

smallImg[3].addEventListener('click', function(e) {
    mainImg.src = smallImg[3].src
})