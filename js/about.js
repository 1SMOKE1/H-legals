// sanwich

let sanwich = document.getElementById('sanwich');
console.log(sanwich);
let btnclose = document.getElementById('btnclose');
console.log(btnclose);
let navMobile = document.getElementById('navmobile');
console.log(navMobile);

function openSanwich (){
  navMobile.classList.add('show');
}
function closeSanwich (){
  navMobile.classList.remove('show');
}

// sanwich continue for the page

window.onscroll = function showNavMobile() {
  if(window.pageYOffset > 50){
    navMobile.classList.add('nav_mobile_fixed')
  }
}

let menu = document.querySelector('#menu');
console.log(menu)
let menu2 = document.querySelector('#menu2');
let carousel = document.getElementById('carouselachive');
console.log(carousel);

function clearBtn(){
  for (i = 0; i < 3; i++){
    let clearActive = menu.children[i];
    clearActive.classList.remove('active');
  }

}

function clearBtnSmall(){
  for (i = 0; i < 6; i++){
    let clearActive = menu2.children[i];
    clearActive.classList.remove('active');
  }

}

function showAchive1 (n) {
  clearBtn()
  carousel.style.marginLeft = "0";
  carousel.style.transition = "margin-left 0.5s ease";
  menu.children[n-1].classList.add('active');
}

function showAchive2 (n) {
  clearBtn()
  carousel.style.marginLeft = '-1320px';
  carousel.style.transition = "margin-left 0.5s ease";
  menu.children[n-1].classList.add('active');
}

function showAchive3 (n) {
  clearBtn()
  carousel.style.marginLeft = '-2640px';
  carousel.style.transition = "margin-left 0.5s ease";
  menu.children[n-1].classList.add('active');
}

function showAchiveSmall1 (n) {
  clearBtnSmall()
  carousel.style.marginLeft = "0";
  carousel.style.transition = "margin-left 0.5s ease";
  menu2.children[n-1].classList.add('active');
}

function showAchiveSmall2 (n) {
  clearBtnSmall()
  carousel.style.marginLeft = "-355px";
  carousel.style.transition = "margin-left 0.5s ease";
  menu2.children[n-1].classList.add('active');
}

function showAchiveSmall3 (n) {
  clearBtnSmall()
  carousel.style.marginLeft = "-710px";
  carousel.style.transition = "margin-left 0.5s ease";
  menu2.children[n-1].classList.add('active');
}

function showAchiveSmall4 (n) {
  clearBtnSmall()
  carousel.style.marginLeft = "-1065px";
  carousel.style.transition = "margin-left 0.5s ease";
  menu2.children[n-1].classList.add('active');
}

function showAchiveSmall5 (n) {
  clearBtnSmall()
  carousel.style.marginLeft = "-1420px";
  carousel.style.transition = "margin-left 0.5s ease";
  menu2.children[n-1].classList.add('active');
}

function showAchiveSmall6 (n) {
  clearBtnSmall()
  carousel.style.marginLeft = "-1835px";
  carousel.style.transition = "margin-left 0.5s ease";
  menu2.children[n-1].classList.add('active');
}