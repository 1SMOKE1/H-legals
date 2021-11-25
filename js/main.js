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

//experience Carousel

let createClass = document.querySelector('#expmenu');
let createClass2 = document.querySelector('#expmenu2');


let title = document.getElementsByClassName('title')[1];
let text = document.getElementsByClassName('text')[0];




function clear (){
  for ( i = 0; i < 4; i++){
    let clearClass = createClass.children[i];
    clearClass.classList.remove('active');
  }
}

function clear2 (){
  for ( i = 0; i < 4; i++){
    let clearClass2 = createClass2.children[i];
    clearClass2.classList.remove('active2');
  }
}

function createTag (){
  let button = document.createElement('button');
  button.className = ('btn_1'),('bg3');
  createClass2.append(button);
}



let arraytitle = [
  `Перевертаємо уявлення про юридичні послуги`,
  `Ми орієнтовані на клієнта`,
  `Інновації це частина майбутнього`,
  `Бізнес орієнтовані, тобто завжди готові підвлаштовуватися під вас`
];
let arraytext = [ 
  ` Консолідуючи багаторічний досвід і практику, юристи компанії
   супроводжують складні проекти і досягають прийняття ряду важливих
   для галузі рішень. Багато з них формують практику застосування морського
   права в Україні.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
  reiciendis veritatis sit labore delectus inventore accusantium
  provident, eaque ab voluptas? Impedit quisquam, saepe culpa corporis hic
  voluptatem in eos omnis!`,
  ` Torem ipsumet consectetur adipisicing elit. Quaerat
  reiciendis veritatis sit labore delectus inventore accusantium
  quam, saepe culpa corporis hic
  voluptatem in eos omnis!`,
   ` Onsectetur adipisicing elit. Quaerat
  reiciendis veritatis sit labore accusantium
  provident, eaqueuam, saepe culpa corporis hic
  voluptatem in eos omnis!`
  ];


function showClients (number) {
  clear()
    title.innerHTML = arraytitle[number-1];
    text.innerHTML = arraytext[number-1];
    createClass.children[number-1].classList.add('active');
}

function showClients2 (number) {
  clear2()
    title.innerHTML = arraytitle[number-1];
    text.innerHTML = arraytext[number-1];
  clear ()
    createClass.children[number-1].classList.add('active');
    createClass2.children[number-1].classList.add('active2');
}



//team carousel


let carousel = document.getElementById('carouselteam');
console.log(carousel)

let btnsTeam = document.querySelector('#teammenu');
console.log(btnsTeam);


function clear3 (){
  for ( i = 0; i < 3; i++){
    let clearBtnsTeam = btnsTeam.children[i];
    clearBtnsTeam.classList.remove('active2');
  }
}

function showTeam1(number){
  clear3()
  //carousel.children[n-1].classList.add = ('height: 500px')
  carousel.style.marginTop = '0';
  carousel.style.transition = 'margin-top 0.5s ease';
  btnsTeam.children[number-1].classList.add('active2');
}

function showTeam2(number){
  clear3()
  //carousel.children[n-1].classList.add = ('height: 500px')
  carousel.style.marginTop = '-500px';
  carousel.style.transition = 'margin-top 0.5s ease';
  btnsTeam.children[number-1].classList.add('active2');
}
function showTeam3(number){
  clear3()
  //carousel.children[n-1].classList.add = ('height: 500px')
  carousel.style.marginTop = '-1000px';
  carousel.style.transition = 'margin-top 0.5s ease';
  btnsTeam.children[number-1].classList.add('active2');
}






