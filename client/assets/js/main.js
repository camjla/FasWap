///MENU

//SHOW AND HIDDEN MENU
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

//VALIDATE - SHOW MENU
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

//VALIDATE- CLOSE MENU
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//Remove menu mobile
const navLink = document.querySelectorAll('.nav-link')
function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  //qnd clica em algum (home, about) vai remover a classe de show menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Active-link-Scroll- Cada vez que for descendo nos topicos vai ficar com a cor bonitinha
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

//CHANGE BACKGROUND HEADER- uma sombrazinha e menu parado

function scrollHeader() {
  const nav = document.getElementById('header')
  //when the scroll is greater than 200 viewport height, add the scroll- header class to the header
  if (this.sccrollY >= 80) nav.classlist.add('scroll-header')
  else nav.classlist.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//========================FAQ============================================
const accordionItemHeaders = document.querySelectorAll('.accordion-item-header')

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(
      '.accordion-item-header.active'
    )
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle('active')
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0
    }

    accordionItemHeader.classList.toggle('active')
    const accordionItemBody = accordionItemHeader.nextElementSibling
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
    } else {
      accordionItemBody.style.maxHeight = 0
    }
  })
})
