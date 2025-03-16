const menu = document.getElementById('menu');
const addButton = document.getElementById('btn');
const newMenuItem = document.getElementById('newMenuItem');
const colorSelector = document.getElementById('colorSelector');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');
const overlay = document.getElementById('overlay');
const closeModal = document.getElementById('closeModal');

// Функция для открытия модального окна
function openModal(imageUrl,title, text) {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalImage.src = imageUrl;
  modal.classList.remove('hidden');
}

// Обработка клика по пунктам меню
menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
      const title = event.target.getAttribute('data-title');
      const imageUrl = event.target.getAttribute('data-image');
      const text = event.target.getAttribute('data-text');
      openModal(imageUrl, title, text);
  }
});



//     // Функция для открытия модального окна
//     function openModal(text) {
//       modalText.textContent = text;
//       modal.classList.remove('hidden');
//       overlay.classList.remove('hidden');
//   }

// // Обработка клика по пунктам меню
// menu.addEventListener('click', (event) => {
//     if (event.target.tagName === 'LI') {
//         openModal(event.target.textContent);
//     }
// });



// Функция для закрытия модального окна
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});


// Добавление нового пункта меню
addButton.addEventListener('click', () => {
    const itemText = newMenuItem.value;
    const color = colorSelector.value;

    if (itemText) {
        const newItem = document.createElement('li');
        newItem.textContent = itemText;
        newItem.style.color = color; // Установка цвета текста
        menu.appendChild(newItem);
        newMenuItem.value = ''; // Очистка текстового поля
    }
});

let images = document.querySelectorAll('#slider-container img');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let message = document.getElementById('message');
let intervalInput = document.getElementById('interval');
let currentIndex = 0;
let timer = null;

function showNextImage() {
    images.forEach(img => img.style.display = 'none');
    if (currentIndex < images.length) {
        images[currentIndex].style.display = 'block';
        currentIndex++;
        timer = setTimeout(showNextImage, parseInt(intervalInput.value));
    } else {
        message.style.display = 'block';
    }
}

startButton.addEventListener('click', () => {
    message.style.display = 'none';
    currentIndex = 0;
    images.forEach(img => img.style.display = 'none');
    images[0].style.display = 'block';
    clearTimeout(timer);
    showNextImage();
});

stopButton.addEventListener('click', () => {
    clearTimeout(timer);
});