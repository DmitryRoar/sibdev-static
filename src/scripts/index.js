const $ = selector => document.querySelector(selector) 

const rightWrapper = $('.right-wrapper')

const burgerBtn = $('.burger')
const leftPanel = $('.left-panel')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    leftPanel.classList.toggle('active')
    rightWrapper.classList.toggle('active')
})