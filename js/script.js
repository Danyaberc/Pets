//Створення та пошук нашого контейнеру з собаками
let container = document.querySelector('.container')
let patron = document.querySelectorAll('.patron')
patron[0].style.backgroundImage = "url('./img/01.png')";
patron[1].style.backgroundImage = "url('./img/05.png')";
patron[2].style.backgroundImage = "url('./img/03.png')";
patron[3].style.backgroundImage = "url('./img/06.png')";

//Розмір
let size = 200;
//Крок собаки
let step = 40;
//Координата собаки
let doggy = [
   { top: 20, left: 20 },
   { top: 200, left: 400 },
   { top: 300, left: 700 },
   { top: 700, left: 400 }
]
// Рендер собак
const render = () => {
   for (let i = 0; i < patron.length; i++) {
      patron[i].style.top = `${doggy[i].top}px`
      patron[i].style.left = `${doggy[i].left}px`
   }
}
render()
// Створення події кліку по всьому контейнеру
container.addEventListener('click', (ev) => {
   let guestX = ev.pageX;
   let guestY = ev.pageY
   if (ev.target === container) {
      return
   }
   for (let i = 0; i < patron.length; i++) {
      if (ev.target === patron[i]) {
         let patronX = guestX - patron[i].getBoundingClientRect().left;
         let patronY = guestY - patron[i].getBoundingClientRect().top;
         let patXst = parseInt(patron[i].style.left)
         let patYst = parseInt(patron[i].style.top);
         // Обробка зіткнень
         for (let i = 0; i < patron.length; i++) {
            for (let j = 0; j < patron.length; j++) {
               if (i !== j) {
                  let distX = doggy[j].left - doggy[i].left;
                  let distY = doggy[j].top - doggy[i].top;
                  let dist = Math.sqrt(distX ** 2 + distY ** 2);
                  if (dist < size) {
                     let overlap = size - dist;
                     let deltaX = (distX / dist) * overlap / 2;
                     let deltaY = (distY / dist) * overlap / 2;
                     doggy[i].left -= deltaX;
                     doggy[i].top -= deltaY;
                     doggy[j].left += deltaX;
                     doggy[j].top += deltaY;
                  }
               }
            }
         }
         // Цикл обробки переміщення собак
         for (let i = 0; i < patron.length; i++) {
            let newlocationX = doggy[i].top;
            let newlocationY = doggy[i].left;
            patron[i].style.top = `${newlocationX}px`;
            patron[i].style.left = `${newlocationY}px`;
         }
         if ((patronX < 100) && (patronY < 100)) {
            doggy[i].top -= step;
            doggy[i].left -= step;
         }
         if ((patronX > 100) && (patronY > 100)) {
            doggy[i].top += step;
            doggy[i].left += step;
         }
         if ((patronX > 100) && (patronY < 100)) {
            doggy[i].top -= step;
            doggy[i].left += step;
         }
         if ((patronX < 100) && (patronY > 100)) {
            doggy[i].top += step;
            doggy[i].left -= step;
         }
      }
      //Зміна з новими координатами собаки
      let newlocationX = doggy[i].top;
      let newlocationY = doggy[i].left;
      patron[i].style.top = `${newlocationX}px`;
      patron[i].style.left = `${newlocationY}px`;
   }
})

