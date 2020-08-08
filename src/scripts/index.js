const $ = selector => document.querySelector(selector) 

const rightWrapper = $('.right-wrapper')
const burgerWrapper = $('.burger-wrapper')

const burgerBtn = $('.burger')
const leftPanel = $('.left-panel')
const searchWrapper = $('.search-wrapper')

const searchTitle = $('.search__title')
const search = $('.search')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    leftPanel.classList.toggle('active')
    rightWrapper.classList.toggle('active')
    burgerWrapper.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY
    if (scrolled >= 50) {
        searchTitle.classList.add('hidden')
        search.classList.add('without-title')
        searchWrapper.classList.add('without')
    }
})