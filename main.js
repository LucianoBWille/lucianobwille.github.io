// abre e fecha o menu quando clicar no icone: hamburguer e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav a')
for (const element of links) {
  element.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando der scrollbar
// const header = document.querySelector('#header')
// const navHeight = header.offsetHeight
// function changeHeaderWhenScroll() {
//   if (window.scrollY >= navHeight) {
//     header.classList.add('scroll')
//   } else {
//     header.classList.remove('scroll')
//   }
// }

// Testimonials carousel slider swiper
// const swiper = new Swiper('.swiper', {
//   // Default parameters
//   slidesPerView: 1,
//   pagination: { el: '.swiper-pagination' },
//   mousewhel: true,
//   keyboard: true,
//   breakpoints: {
//     767: { slidesPerView: 2, setWrapperSize: true }
//   }
// })

// ScrollReveal: Mostrar elemento quando der scroll na página
// const scrollReveal = ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700,
//   reset: true
// })

// scrollReveal.reveal(
//   `
// #home .title, #home .grid-social, 
// #about .image, #about .text, 
// #services header, #services .card,
// #contact .text, #contact .links
// `,
//   { interval: 100 }
// )

// Botão voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')
function activateMenuAttCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 3.5
  for (section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active')
    }
  }
}
activateMenuAttCurrentSection()

// When Scroll
window.addEventListener('scroll', () => {
  //changeHeaderWhenScroll()
  backToTop()
  activateMenuAttCurrentSection()
})