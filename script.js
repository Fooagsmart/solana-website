// const toggleButtons = document.querySelectorAll('.dropdown');
// const dotElements = document.querySelectorAll('.nav-item .show');

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


// toggleButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     dotElements.forEach((dot, dotIndex) => {
//      if (index === dotIndex){
//         dot.style.display = 'block'
//       }else{
//         dot.style.display = 'none' 
//       }
//     })
//   })
// })

// window.addEventListener('scroll', () => {
//     dotElement.style.display = 'none'
//     dotElemen.style.display = 'none'
//     dotElemet.style.display = 'none'
//     dotElment.style.display = 'none'
//     dotElemnt.style.display = 'none'
// })

  // Function to toggle the dropdown
  function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }

  // Function to close the dropdown if the user clicks on it
  function closeDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    }
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      closeDropdown();
    }
  }





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

// var swiper = new Swiper(".slick-track", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   loop:true,
// });

// window.onload=function(){
//   $('.slick-track').slick({
//   autoplay:true,
//   autoplaySpeed:3000,
//   arrows:true,
//   prevArrow:'<button type="button" class="slick-prev"></button>',
//   nextArrow:'<button type="button" class="slick-next"></button>',
//   slidesToShow:3,
//   slidesToScroll:3,
//   dots:true,
//   });
// };


new SimpleSlider('.simple-slider-first', {
  speed: 600,
  autoplay: true,
  class: {
    wrapper: 'slider-wrapper'
  },
  onChange: function() {
    console.log('Slide changed !');
  }
});

// const leftButton = document.querySelector('.leftButton');
// const rightButton = document.querySelector('.rightButton');
// const slides = document.querySelector('.slides');
// const container = document.querySelector('.container');

// let page = 0;

// leftButton.addEventListener('click', () => {
//   if (page > 0) {
//     page--;
//     slides.style.transform = `translateX(${(page) * -100}%)`;
//   }
// });

// rightButton.addEventListener('click', () => {
//   if (page < slides.children.length - 1) {
//     page++;
//     slides.style.transform = `translateX(${(page) * -100}%)`;
//   }
// });

// let intervalId;

// function triggerAutoPlay() {
//   intervalId = setInterval(() => {
//     if (page < slides.children.length - 1) {
//       page++;
//       slides.style.transform = `translateX(${(page) * -100}%)`;
//     } else if (page === slides.children.length - 1) {
//       page = 0;
//       slides.style.transform = `translateX(0)`;
//     }
//   }, 1000);
// }

// function stopAutoPlay() {
//   console.log('heellllllo')
//   clearInterval(intervalId);
// }

// container.addEventListener('mouseover', () => {
//   stopAutoPlay();
// });

// container.addEventListener('mouseout', () => {
//   triggerAutoPlay();
// });

// triggerAutoPlay();