const navTriggerEl = document.querySelector('.hamburger')
const navEl = document.querySelector('.nav')
const contentEl = document.querySelector('.content')
const hamburgerBarsEl = document.getElementsByTagName('span')

function toggleNav() {
  navTriggerEl.addEventListener('click', function () {
    navEl.classList.toggle('open')
    contentEl.classList.toggle('shift')
    animateHamburgers()
  })
}

function animateHamburgers() {
  for (let i = 0; i < hamburgerBarsEl.length; i++) {
    hamburgerBarsEl[i].classList.add('change')
  }
}

toggleNav()
