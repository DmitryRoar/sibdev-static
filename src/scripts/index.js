const $ = selector => document.querySelector(selector) 

const rightWrapper = $('.right-wrapper')
const burgerWrapper = $('.burger-wrapper')

const burgerBtn = $('.burger')
const leftPanel = $('.left-panel')

const searchTitle = $('.search__title')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    leftPanel.classList.toggle('active')
    rightWrapper.classList.toggle('active')
    burgerWrapper.classList.toggle('active')
})

document.addEventListener('scroll', () => {
    setTimeout(() => {
        searchTitle.classList.add('hidden')
    }, 2000)
})