//Знаходимо наш контейнер і собак
let container = document.querySelector('.container')
let patron = document.querySelector('.patron')
let patron2 = document.querySelector('.patron2')
let patron3 = document.querySelector('.patron3')

//Вставляємо картинки бекграундом
patron.style.backgroundImage = "url('./img/01.png')";
patron2.style.backgroundImage = "url('./img/02.png')";
patron3.style.backgroundImage = "url('./img/03.png')";

// Початкова координата першого патрона
let patronTop = 15
let patronLeft = 15

//Виставляємо координати нашого першого патрона
patron.style.top = patronTop + 'px'
patron.style.left = patronLeft + 'px'

//Виставляємо крок за яким собаки будуть робити рух
let step = 15;

//Створюємо клік на першого патрона
patron.addEventListener('click', (ev) => {
   //Створюємо зміну в яку вкладаємо координати нашого контейнера
   let guestX = ev.pageX
   let guestY = ev.pageY

   //Створюємо зміну в яку вкладаємо результат розрахунку координат кліку на малюнку
   let patronX = guestX - patron.getBoundingClientRect().left;
   let patronY = guestY - patron.getBoundingClientRect().top;
   console.log('patronX:', patronX)
   console.log('patronY:', patronY)
   // Створюємо зміну в яку вкладаємо ціле число 
   let patXst = parseInt(patron.style.left)
   let patYst = parseInt(patron.style.top);
   console.log('patXst:', patXst)
   console.log('patYst:', patYst)
   // Створюємо умови завдяки яким ми ділемо картинку на 4 частини
   if ((patronX < 100) && (patronY < 100)) {
      guestX = patYst - step
      guestY = patXst - step
      console.log('Верхній лівий кут')
   }
   if ((patronX > 100) && (patronY > 100)) {
      guestX = patYst + step
      guestY = patXst + step
      console.log('Нижній правий кут')
   }
   if ((patronX > 100) && (patronY < 100)) {
      guestX = patYst - step
      guestY = patXst + step
      console.log('Верхній правий кут')
   }
   if ((patronX < 100) && (patronY > 100)) {
      guestX = patYst + step
      guestY = patXst - step
      console.log('Нижній лівий кут')
   }
   // Створюємо зміну в яку вкладаємо результат розрахунку умов
   patronTop = guestX
   patronLeft = guestY
   // Визначаємо поточну координату собаки
   patron.style.top = guestX + 'px'
   patron.style.left = guestY + 'px'

})

// Початкова координата другого патрона
let patronTop2 = 405
let patronLeft2 = 405

patron2.style.top = patronTop2 + 'px'
patron2.style.left = patronLeft2 + 'px'
// ---------------------------

// Створюємо клік на другого патрона
patron2.addEventListener('click', (ev) => {
   let guestX = ev.pageX
   let guestY = ev.pageY
   //Створюємо зміну в яку вкладаємо результат розрахунку координат кліку на малюнку
   let patronX = guestX - patron2.getBoundingClientRect().left;
   let patronY = guestY - patron2.getBoundingClientRect().top;
   console.log('patronX:', patronX)
   console.log('patronY:', patronY)
   // Створюємо зміну в яку вкладаємо ціле число 
   let patXst = parseInt(patron2.style.left)
   let patYst = parseInt(patron2.style.top);
   console.log('patXst:', patXst)
   console.log('patYst:', patYst)
   // Створюємо умови завдяки яким ми ділемо картинку на 4 частини
   if ((patronX < 100) && (patronY < 100)) {
      guestX = patYst - step
      guestY = patXst - step
      console.log('Верхній лівий кут')
   }
   if ((patronX > 100) && (patronY > 100)) {
      guestX = patYst + step
      guestY = patXst + step
      console.log('Нижній правий кут')
   }
   if ((patronX > 100) && (patronY < 100)) {
      guestX = patYst - step
      guestY = patXst + step
      console.log('Верхній правий кут')
   }
   if ((patronX < 100) && (patronY > 100)) {
      guestX = patYst + step
      guestY = patXst - step
      console.log('Нижній лівий кут')
   }
   // Створюємо зміну в яку вкладаємо результат розрахунку умов
   patronTop2 = guestX
   patronLeft2 = guestY
   // Визначаємо поточну координату собаки
   patron2.style.top = guestX + 'px'
   patron2.style.left = guestY + 'px'

})

// Початкова координата Третього патрона
let patronTop3 = 205
let patronLeft3 = 805
//Створюємо зміну в яку вкладаємо результат розрахунку координат кліку на малюнку
patron3.style.top = patronTop3 + 'px'
patron3.style.left = patronLeft3 + 'px'
// ---------------------------

// Створюємо клік на третього патрона
patron3.addEventListener('click', (ev) => {
   let guestX = ev.pageX
   let guestY = ev.pageY
   //Створюємо зміну в яку вкладаємо результат розрахунку координат кліку на малюнку
   let patronX = guestX - patron3.getBoundingClientRect().left;
   let patronY = guestY - patron3.getBoundingClientRect().top;
   console.log('patronX:', patronX)
   console.log('patronY:', patronY)
   // Створюємо зміну в яку вкладаємо ціле число 
   let patXst = parseInt(patron3.style.left)
   let patYst = parseInt(patron3.style.top);
   console.log('patXst:', patXst)
   console.log('patYst:', patYst)
   // Створюємо умови завдяки яким ми ділемо картинку на 4 частини
   if ((patronX < 100) && (patronY < 100)) {
      guestX = patYst - step
      guestY = patXst - step
      console.log('Верхній лівий кут')
   }
   if ((patronX > 100) && (patronY > 100)) {
      guestX = patYst + step
      guestY = patXst + step
      console.log('Нижній правий кут')
   }
   if ((patronX > 100) && (patronY < 100)) {
      guestX = patYst - step
      guestY = patXst + step
      console.log('Верхній правий кут')
   }
   if ((patronX < 100) && (patronY > 100)) {
      guestX = patYst + step
      guestY = patXst - step
      console.log('Нижній лівий кут')
   }
   // Створюємо зміну в яку вкладаємо результат розрахунку умов
   patronTop3 = guestX
   patronLeft3 = guestY
   // Визначаємо поточну координату собаки
   patron3.style.top = guestX + 'px'
   patron3.style.left = guestY + 'px'

})


