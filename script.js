const toggleButtons = document.querySelectorAll('.dropdown');
const dotElements = document.querySelectorAll('.nav-item .show');
const dotElement = document.querySelector('.dropdown-menu-1');
const dotElemnt = document.querySelector('.dropdown-menu-2');
const dotElemet = document.querySelector('.dropdown-menu-3');
const dotElemen = document.querySelector('.dropdown-menu-4');
const dotElment = document.querySelector('.dropdown-menu-5');
const hid = document.querySelector('.navbar-toggler');

const game = document.querySelector('.game')
const nfts = document.querySelector('.nfts')
const defi = document.querySelector('.defi')
const payments = document.querySelector('.payments')
const daos = document.querySelector('.daos')
const dn1 = document.querySelector('.dn1')
const dn2 = document.querySelector('.dn2')
const dn3 = document.querySelector('.dn3')
const dn4 = document.querySelector('.dn4')
const dn5 = document.querySelector('.dn5')


payments.addEventListener('click', () => {
    dn1.style.display = 'block'
    dn2.style.display = 'none'
    dn3.style.display = 'none'
    dn4.style.display = 'none'
    dn5.style.display = 'none'
});

nfts.addEventListener('click', () => {
    dn1.style.display = 'none'
    dn2.style.display = 'none'
    dn3.style.display = 'block'
    dn4.style.display = 'none'
    dn5.style.display = 'none'
});

game.addEventListener('click', () => {
    dn1.style.display = 'none'
    dn2.style.display = 'block'
    dn3.style.display = 'none'
    dn4.style.display = 'none'
    dn5.style.display = 'none'
});

defi.addEventListener('click', () => {
    dn1.style.display = 'none'
    dn2.style.display = 'none'
    dn3.style.display = 'none'
    dn4.style.display = 'block'
    dn5.style.display = 'none'
});

daos.addEventListener('click', () => {
    dn1.style.display = 'none'
    dn2.style.display = 'none'
    dn3.style.display = 'none'
    dn4.style.display = 'none'
    dn5.style.display = 'block'
});


toggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    dotElements.forEach((dot, dotIndex) => {
     if (index === dotIndex){
        dot.style.display = 'block'
      }else{
        dot.style.display = 'none' 
      }
    })
  })
})

window.addEventListener('scroll', () => {
    dotElement.style.display = 'none'
    dotElemen.style.display = 'none'
    dotElemet.style.display = 'none'
    dotElment.style.display = 'none'
    dotElemnt.style.display = 'none'
})





hid.addEventListener('click', () =>{
    document.querySelector('.navbar-collapse').style.display = 'block'
    document.querySelector('.fa-x').style.display = 'block'
    hid.style.display = 'none'
})

document.querySelector('.fa-x').addEventListener('click', () =>{
    document.querySelector('.navbar-collapse').style.display = 'none'
    document.querySelector('.fa-x').style.display = 'none'
    hid.style.display = 'block'
})

// initialise swiper

var swiper = new Swiper(".slick-initialized", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});