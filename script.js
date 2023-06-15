const buttons = document.querySelectorAll('.option')
const texts = document.querySelectorAll('.formations')
const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menuClose')
const listMobile = document.querySelector('.listMobile')
const mobileItens = document.querySelectorAll('.mobileItem')

window.sr = ScrollReveal();

sr.reveal('.content', {duration: 1000})
sr.reveal('.training-section', {duration: 1100, delay: 70})
sr.reveal('.projects-section', {duration: 800})
sr.reveal('.services-section', {duration: 1000, delay: 70})
sr.reveal('.contact-section', {duration: 1000, delay: 70})


menu.addEventListener('click', ()=>{
    listMobile.classList.toggle('active')
    menu.classList.add('hidden')
    menuClose.classList.remove('hidden')
})
menuClose.addEventListener('click', ()=>{
    listMobile.classList.toggle('active')
    menuClose.classList.add('hidden')
    menu.classList.remove('hidden')
})

mobileItens.forEach((item) =>{
    item.addEventListener('click', () =>{
        listMobile.classList.remove('active')
        menuClose.classList.add('hidden')
        menu.classList.remove('hidden')
    })
})
function changeActive(buttonSelected){
    const oldActive = document.querySelector('.active')
    oldActive.classList.remove('active')
    buttonSelected.classList.add('active')
}

function changeText(buttonSelected){
    texts.forEach((text) =>{
        if(buttonSelected.classList[1] !== text.classList[1]){
            text.classList.add('none')
        }else{
            text.classList.remove('none')
        }
    })
}

buttons.forEach((button) =>{

    button.addEventListener('click', (e) =>{
        e.preventDefault()
        const buttonSelected = e.target
        changeActive(buttonSelected)
        changeText(buttonSelected)
    })
})