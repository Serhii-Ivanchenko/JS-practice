//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

// const box = document.querySelector('.box');
// const blocks = 100;
// const divContainer = document.createElement('div');
// divContainer.classList.add('number-container');
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// for (let i = 0; i < blocks; i++) {
//   const div = document.createElement('div');
//   div.classList.add('number');
//   div.textContent = randomNumber();

//   if (div.textContent % 2 === 0) {
//     div.classList.add('even');
//   } else {
//     div.classList.add('odd');
//   }
//   divContainer.appendChild(div);
// }

// box.append(divContainer);

// Через input=========================================================

// const box = document.querySelector('.box');
// const form = document.querySelector('form');

// form.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   const amount = Number(event.currentTarget.elements.box.value);
//   box.innerHTML = '';

//   const divContainer = document.createElement('div');
//   divContainer.classList.add('number-container');
//   const randomNumber = () => Math.floor(Math.random() * 100) + 1;

//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement('div');
//     div.classList.add('number');
//     div.textContent = randomNumber();

//     if (div.textContent % 2 === 0) {
//       div.classList.add('even');
//     } else {
//       div.classList.add('odd');
//     }
//     divContainer.appendChild(div);
//   }

//   box.append(divContainer);
//   event.currentTarget.reset();
// }

//TODO:=========task-02=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`
*/

const input = document.querySelector('.input');

// Input event
// input.addEventListener('input', event => {
//   const inputValue = event.currentTarget.value;

//   if (inputValue.length >= 6) {
//     input.classList.add('success');
//     input.classList.remove('error');
//   } else {
//     input.classList.add('error');
//   }
// });

/** Focus event
 ** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то`outline` => `'3px solid green'`
 */
// input.addEventListener('focus', event => {
//   const input = event.currentTarget;
//   if (input.value === '') {
//     input.classList.add('error');
//   } else {
//     input.classList.remove('error');
//     input.classList.add('success');
//   }
// });

/** Blur event
 **3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
 */
// input.addEventListener('blur', event => {
//   const input = event.currentTarget;
//   if (input.value === '') {
//     input.classList.add('error');
//   } else {
//     input.classList.remove('error');
//     input.classList.add('success');
//   }
// });

//TODO:=========task-01=======Accordion==========
/**
 * Викориcтовуй шаблон акордеон меню з файлу html та напиши наступний функціонал:
 * при кліку на елемент меню, розкривай блок з текстом.При повторному кліку по елементу,
 * розкритий текст приховується.Нажимаючи на інші елементи меню, попередньо відкриті елементи не закриваються.
 */

// const listEl = document.querySelector('.js-accordion-list');
// listEl.addEventListener('click', onClick);

// function onClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }
//   event.target.nextElementSibling.classList.toggle('active');
// }
