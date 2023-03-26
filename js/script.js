let container = document.querySelector('.container')
let patron = document.querySelector('.patron')

patron.style.backgroundImage = "url('./img/01.png')";
// Початкова координата
let patronTop = 15
let patronLeft = 15

patron.style.top = patronTop + 'px'
patron.style.left = patronLeft + 'px'
// ---------------------------

let step = 15;

patron.addEventListener('click', (ev) => {
   let guestX = ev.clientX
   let guestY = ev.clientY

   let patronX = guestX - patron.getBoundingClientRect().left;
   let patronY = guestY - patron.getBoundingClientRect().top;
   console.log('patronX:', patronX)
   console.log('patronY:', patronY)

   let patXst = parseInt(patron.style.left)
   let patYst = parseInt(patron.style.top);
   console.log('patXst:', patXst)
   console.log('patYst:', patYst)

   if ((patronX < 100) && (patronY < 100)) {
      guestX = patXst - step
      guestY = patYst - step
      console.log('Верхній лівий кут')
   }
   if ((patronX > 100) && (patronY > 100)) {
      guestX = patXst + step
      guestY = patYst + step
      console.log('Нижній правий кут')
   }
   if ((patronX > 100) && (patronY < 100)) {
      guestX = patXst - step
      guestY = patYst + step
      console.log('Верхній правий кут')
   }
   if ((patronX < 100) && (patronY > 100)) {
      guestX = patXst + step
      guestY = patYst - step
      console.log('Нижній лівий кут')
   }
   patronTop = guestX
   patronLeft = guestY

   patron.style.top = guestX + 'px'
   patron.style.left = guestY + 'px'

})






























// let container = document.querySelector('.container')
// let patron = document.querySelectorAll('.patron')

// patron[0].style.backgroundImage = "url('./img/01.png')";
// patron[1].style.backgroundImage = "url('./img/02.png')";
// patron[2].style.backgroundImage = "url('./img/03.png')";

// let size = 150;

// let step = 30;


// for (let i = 0; i < patron.length; i++) {
//    patron[i].style.width = `${size}px`;
//    patron[i].style.height = `${size}px`;
// }

// let cordpatron = [
//    { top: 100, left: 200 },
//    { top: 300, left: 450 },
//    { top: 500, left: 700 }
// ]

// const locationdogs = () => {
//    for (let i = 0; i < cordpatron.length; i++) {
//       patron[i].style.top = `${cordpatron[i].top}px`;
//       patron[i].style.left = `${cordpatron[i].left}px`;
//    }
// }
// locationdogs();

// container.addEventListener('click', (ev) => {
//    if (ev.target === container) { return }

//    //Розміри блоку,на який розбивається зображення
//    let blockWidth = size / 2
//    let blockHeight = size / 2

//    //Вираховуємо номер блоку, на який клікнули
//    let targetX = Math.floor((ev.pageX - container.offsetLeft) / blockWidth);
//    let targetY = Math.floor((ev.pageY - container.offsetTop) / blockHeight);
//    let targetIndex = targetX + targetY * 2;

//    //Вираховуємо координати верхнього лівого угла блоку
//    let blockTop = targetY * blockHeight;
//    let blockLeft = targetX * blockWidth;

//    //Нові координати для всіх блоків
//    let newCordpatron = [
//       { top: cordpatron[0].top + blockTop, left: cordpatron[0].left + blockLeft },
//       { top: cordpatron[1].top + blockTop, left: cordpatron[1].left + blockLeft },
//       { top: cordpatron[2].top + blockTop, left: cordpatron[2].left + blockLeft }
//    ]
//    //Переміщуємо блоки на нові координати
//    for (let i = 0; i < patron.length; i++) {
//       patron[i].style.top = `${newCordpatron[i].top}px`;
//       patron[i].style.left = `${newCordpatron[i].left}px`;
//    }
// })

