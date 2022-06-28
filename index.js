const lastSection = document.querySelector('.last-section')
const vButton = document.querySelector('.v-upside')
const hambugerMenu = document.querySelector('.hambuger-menu')
const navPositionStyle = document.querySelector('.nav-position-style')
const arr = [document.querySelector('.hamburger'), document.querySelector('.line'), document.querySelector('.back')]

vButton.addEventListener('click', () => {
    lastSection.classList.toggle('active')
    vButton.classList.toggle('active')
})

arr.forEach(element => {
    element.addEventListener('click', () =>{
        hambugerMenu.classList.toggle('active')
        navPositionStyle.classList.toggle('active')  
    })
});