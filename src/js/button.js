const burgerButton = document.querySelector('.header-icon_burger_button')
const buttonOpenMenu = document.querySelector('.header__dropdown-menu')
const hiddenContent = document.querySelector('.overlay-menu')
const buttonTextShow = document.querySelector('.about-company__read-more')
const blockContent = document.querySelector('.all_blocks')
const aboutCompanyText = document.querySelector('.about-company__text')
const textSpan = document.querySelector('.span-text')
const hiddenImg = document.querySelector('.about-company__expand-icon')
const buttonChat = document.querySelector('.button_chat')
const modalForm = document.getElementById('feedbackModal')
const modalClose = document.getElementById('modalClose')
const modalCallForm = document.getElementById('modal-call')
const buttonCall = document.querySelector('.contact_telefon')
const modalCloseCall = document.getElementById('modalCloseCall')
const headerCallButton = document.getElementById('header__call-button')
const headerChatButton = document.querySelector('.header__chat-icon')

buttonOpenMenu.addEventListener('click', function () {
  hiddenContent.classList.add('open--menu--content')
  document.body.style.overflow = 'hidden'
})

burgerButton.addEventListener('click', function () {
  hiddenContent.classList.remove('open--menu--content')
  document.body.style.overflow = ''
})

buttonTextShow.addEventListener('click', function () {
  aboutCompanyText.classList.toggle('text--open')
  if (textSpan.textContent === 'Читать далее') {
    textSpan.textContent = 'Скрыть'
    hiddenImg.style.transform = 'rotate(180deg)'
  } else {
    textSpan.textContent = 'Читать далее'
    hiddenImg.style.transform = 'rotate(0deg)'
  }
})

buttonChat.addEventListener('click', function () {
  modalForm.classList.add('open')
  document.body.style.overflow = 'hidden'
})

modalClose.addEventListener('click', (e) => {
  modalForm.classList.remove('open')
  document.body.style.overflow = ''
})

buttonCall.addEventListener('click', (e) => {
  modalCallForm.classList.add('open')
  document.body.style.overflow = 'hidden'
})

modalCloseCall.addEventListener('click', (e) => {
  modalCallForm.classList.remove('open')
  document.body.style.overflow = ''
})

headerCallButton.addEventListener('click', (e) => {
  const isOpen = modalCallForm.classList.toggle('open')
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

headerChatButton.addEventListener('click', (e) => {
  const isOpen = modalForm.classList.toggle('open')
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

function closeModal(modal, className) {
  return function (event) {
    if (event.target === modal) {
      modal.classList.remove(className)
      document.body.style.overflow = ''
    }
  }
}

document.addEventListener('click', closeModal(modalForm, 'open'))
document.addEventListener('click', closeModal(modalCallForm, 'open'))
document.addEventListener(
  'click',
  closeModal(hiddenContent, 'open--menu--content')
)
