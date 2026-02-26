let swipers = []
const breakpoint = window.matchMedia('(max-width: 767px)')

function initAllSwipers() {
  const swiperElements = document.querySelectorAll('.swiper')

  if (breakpoint.matches) {
    swiperElements.forEach((element, index) => {
      if (!swipers[index]) {
        swipers[index] = new Swiper(element, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          loop: false,
          pagination: {
            el: element.querySelector('.swiper-pagination'),
            clickable: true
          },
          observer: true,
          observeParents: true,
          observeSlideChildren: true
        })
      }
    })
  } else {
    destroyAllSwipers()
  }
}

function destroyAllSwipers() {
  swipers.forEach((swiper, index) => {
    if (swiper && swiper.destroy) {
      swiper.destroy(true, true)
    }
  })
  swipers = []
}

document.addEventListener('DOMContentLoaded', function () {
  initAllSwipers()
})

window.addEventListener('resize', function () {
  requestAnimationFrame(initAllSwipers)
})

breakpoint.addEventListener('change', function () {
  initAllSwipers()
})

let btn = document.querySelector('.block-with-links_hide_show_button')
let btnTwo = document.querySelector('.button--swiper--two')
let isOpen = false
let isOpenTwo = false

btn.innerHTML =
  '<img class="block-with-links_hide_show_button__show show" src="img/icon3.svg" alt="the show everything button"><span>Показать все</span>'

btnTwo.innerHTML =
  '<img class="showButton" src="img/icon3.svg"><span>Показать все</span>'

let showBtn = document.querySelectorAll(
  '.block-with-links_hide_show_button__hide_button'
)

let hideContentFirst = document.querySelectorAll(
  '.block-with-links:not(:has(.card--tech)) .block-with-links_container.swiper-slide'
)
let hideContentSecond = document.querySelectorAll(
  '.block-with-links:has(.card--tech) .block-with-links_container.swiper-slide'
)

btn.addEventListener('click', function () {
  isOpen = !isOpen
  showBtn.forEach((el) => {
    el.classList.toggle('show', isOpen)
  })

  hideContentFirst.forEach((el) => {
    el.classList.toggle('hidden-content')
  })

  btn.innerHTML = isOpen
    ? '<img class="block-with-links_hide_show_button__hide" src="img/icon1.svg" alt="hide button"><span>Скрыть</span>'
    : '<img class="block-with-links_hide_show_button__show show" src="img/icon3.svg" alt="the show everything button"><span>Показать все</span>'
})

btnTwo.addEventListener('click', function () {
  isOpenTwo = !isOpenTwo
  hideContentSecond.forEach((el) => {
    el.classList.toggle('hideTwo')
  })

  btnTwo.innerHTML = isOpenTwo
    ? '<img class="block-with-links_hide_show_button__hide" src="img/icon1.svg" alt="hide button"><span>Скрыть</span>'
    : '<img class="showButton" src="img/icon3.svg"><span>Показать все</span>'
})
