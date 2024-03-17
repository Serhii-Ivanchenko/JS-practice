// !TIC-TAC-TOE
// Потрібно створити гру хрестики-нулики.
// 1) Відмалюй розмітку ігрового поля для контейнера з класом "content", для кожної клітинки застосуй клас "item"
// 2) Реалізуй делегування подій на ігровому полі для можливості ходу.
// 3) Скріпт має самостійно визначити переможця гри та виводити модальне вікно з переможцем (х / о).
// 4) Для історії ходів наших гравців (х/о) потрібно, щоб кожна клітинка ігрового поля містила дата атрибут id.
// 5) Створи скріпт для перевірки виграшної комбінації, список всіх можливих виграшних комбінації знаходиться в масиви "combinations".
// 6) Для виводу модального вікна застосуй бібліотеку basicLightbox.
// 7) Після визнчення переможця обов'язково підготуй ігрове поле для наступної гри.

const combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9],
];

const contentContainer = document.querySelector('.content');

let element = '';

function createMarkup() {
  for (let i = 1; i <= 9; i += 1) {
    element += `<div class="item" id=${i}></div>`;
  }
  contentContainer.insertAdjacentHTML('beforeend', element);
}
createMarkup();
const cellEl = document.querySelectorAll('.item');
cellEl.forEach(cellEl => {
  cellEl.addEventListener('click', onClick);
});

function onClick(event) {
  console.log('click on the cell');
}
