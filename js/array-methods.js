// ! Переведіть текст виду border-left-width в borderLeftWidth

// Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.
// Тобто дефіси видаляються, а всі слова після них починаються з великої літери.

// Приклади:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join('');
// }

// console.log(camelize('list-style-image'));

// ! Фільтрація за діапазоном

// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
// Функція повинна повертати новий масив і не змінювати вихідний.

// Наприклад:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (відфільтровані значення)

// alert( arr ); // 5,3,8,1 (не змінюється)

// function filterRange(arr, a, b) {
//   return arr.filter(item => item >= a && item <= b)
//   }

// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// ! Фільтрація за діапазоном "на місці"

// Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих, які знаходяться між a і b. Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.

// Функція повинна змінювати поточний масив і нічого не повертати.

// Наприклад:

// let arr = [5, 3, 8, 1, 4, 7, 2];

// filterRangeInPlace(arr, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4

// alert( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {

//     arr.forEach((element, index) => {
//         if (element >= a  && element <= b) {
//             return
//         } else {arr.splice(index, 1)}
//     });

// }

// console.log(filterRangeInPlace(arr, 1, 4));
// console.log(arr);

// ! Сортувати за спаданням

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log( arr ); // 8, 5, 2, 1, -10

// !Скопіювати і впорядкувати масив

// У нас є масив рядків arr. Потрібно отримати відсортовану копію та залишити arr незміненим.
// Створіть функцію copySorted(arr), яка буде повертати таку копію.

// let arr = ["HTML", "JavaScript", "CSS"];

// const copySorted = (array) => {
//     return array.toSorted((a, b) => a.localeCompare(b))
// }

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без змін)

// ! Створити розширюваний калькулятор

// Створіть функцію-конструктор Calculator, яка створює «розширюваний» обʼєкт калькулятора.
// Завдання складається з двох частин.

// 1) По-перше, реалізуйте метод calculate(str), який приймає рядок типу "1 + 2" в форматі «ЧИСЛО оператор ЧИСЛО» (розділені пробілами) і повертає результат. Метод повинен розуміти плюс + і мінус -.

// Приклад використання:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// 2) Потім додайте метод addMethod(name, func), який додає в калькулятор нові операції. Він приймає оператор name і функцію з двома аргументами func(a, b), яка описує його.

// Наприклад, давайте додамо множення *, ділення / і зведення в ступінь **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для цього завдання не потрібні дужки або складні вирази.
// Числа і оператор розділені рівно одним пропуском.
// Не зайвим буде додати обробку помилок.

// function Calculator() {
//   this.methods = {
//     '-': (a, b) => a - b,
//     '+': (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }
// let calc = new Calculator();

// console.log(calc.calculate('3 + 7')); // 10
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8

// ! Трансформувати масив об'єктів в масив імен

// У вас є масив об’єктів user, і в кожному з них є user.name. Напишіть код, який перетворює їх в масив імен.

// Наприклад:

// let ivan = { name: 'Іван', age: 25 };
// let petro = { name: 'Петро', age: 30 };
// let mariya = { name: 'Марія', age: 28 };

// let users = [ivan, petro, mariya];

// // let names = [];
// // users.forEach(user => {
// //     names.push(user.name);
// // });
// // or
// // let names = users.map(item => item.name);

// console.log(names); // Іван, Петро, Марія

// !Трансформувати в обʼєкти
// У вас є масив обʼєктів user, і у кожного з обʼєктів є name, surname та id.

// Напишіть код, який створить ще один масив обʼєктів з параметрами id й fullName, де fullName – складається з name та surname.

// Наприклад:

// let ivan = { name: 'Іван', surname: 'Іванко', id: 1 };
// let petro = { name: 'Петро', surname: 'Петренко', id: 2 };
// let mariya = { name: 'Марія', surname: 'Мрійко', id: 3 };

// let users = [ivan, petro, mariya];

// let usersMapped = users.map(user => {
//   return {
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
//   };
// });

// console.log(usersMapped);

// console.log(usersMapped[1].id); // 1
// console.log(usersMapped[1].fullName); // Іван Іванко

// !Відсортувати масив об'єктів користувачів за віком
// Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.

// Наприклад:
// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [ petro, ivan, mariya ];

// const sortByAge = (users) => {
//     return users.sort((a, b) => a.age - b.age)
// }

// sortByAge(arr);

// // // now: [ivan, mariya, petro]
// console.log(arr[0].name); // Іван
// console.log(arr[1].name); // Марія
// console.log(arr[2].name); // Петро

// ! Перемішайте масив

// Напишіть функцію shuffle(array), яка перемішує (випадковим чином переставляє) елементи масиву.
// Багаторазові прогони через shuffle можуть привести до різних послідовностей елементів. Наприклад:

// let arr = [1, 2, 3];

// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// shuffle(arr);
// console.log(arr);
// shuffle(arr);
// console.log(arr);

// Всі послідовності елементів повинні мати однакову ймовірність. Наприклад, [1,2,3] може бути перемішана як [1,2,3] або [1,3,2], або [3,1,2] тощо, з однаковою ймовірністю кожного випадку.

// ! Вирахувати середній вік

// Напишіть функцію getAverageAge(users), яка приймає масив об’єктів з властивістю age та повертає середній вік.
// Формула обчислення середнього арифметичного значення: (age1 + age2 + ... + ageN) / N.

// Наприклад:

// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(array) {
//   //   let totalAge = 0;
//   //   for (const item of array) {
//   //     totalAge += item.age;
//   //   }
//   //   return totalAge / array.length;

//   // using reduce

// //   return array.reduce((acc, item) => acc + item.age, 0) / array.length;
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// ! Залишити унікальні елементи масиву

// Нехай arr – масив рядків.
// Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.

// Наприклад:
// let newArr = [];
// function unique(arr) {
//   for (const item of arr) {
//     if (!newArr.includes(item)) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

// let strings = [
//   'Привіт',
//   'Світ',
//   'Привіт',
//   'Світ',
//   'Привіт',
//   'Привіт',
//   'Світ',
//   'Світ',
//   ':-O',
// ];

// console.log(unique(strings)); // Привіт, Світ, :-O

// ! Створення об'єкта з ключем з масиву об'єктів

// Припустимо, ми отримали масив користувачів у вигляді {id:..., name:..., age:...}.
// Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями.

// Наприклад:

// let users = [
//   {id: 'іван', name: "Іван Іванко", age: 20},
//   {id: 'ганна', name: "Ганна Іванко", age: 24},
//   {id: 'петро', name: "Петро Петренко", age: 31},
// ];

// function groupById(array) {
//   return array.reduce((newObj, currentObj) => {
//     newObj[currentObj.id] = currentObj;
//     return newObj;
//   }, {});
// }

// console.log(groupById(users));

// після виклику функції ви повинні отримати:
// usersById = {
//   іван: {id: 'іван', name: "Іван Іванко", age: 20},
//   ганна: {id: 'ганна', name: "Ганна Іванко", age: 24},
//   петро: {id: 'петро', name: "Петро Петренко", age: 31},
// }
//

// TODO Задачки від Тьоми
// ! Метод map
// Ага, значит сегодня в меню тренировка мозгов с методом map(). Держи задачку, на разогрев:

// Представь, что ты работаешь в космическом агентстве, и тебе нужно обработать данные о планетах Солнечной системы. У тебя есть массив объектов, где каждый объект содержит информацию о планете: её название и средний радиус. Твоя задача – создать новый массив, где ты увеличишь радиус каждой планеты на 10%. Не забудь, что космос не терпит приближений, так что округлять числа будем до двух знаков после запятой.

// Вот твой исходный массив:

// const planets = [
//   { name: 'Меркурий', radius: 2439.7 },
//   { name: 'Венера', radius: 6051.8 },
//   { name: 'Земля', radius: 6371 },
//   { name: 'Марс', radius: 3389.5 },
//   { name: 'Юпитер', radius: 69911 },
//   { name: 'Сатурн', radius: 58232 },
//   { name: 'Уран', radius: 25362 },
//   { name: 'Нептун', radius: 24622 },
// ];

// function planetsRadiusIncrease(arr) {
//   return arr.map(item => ({
//     name: item.name,
//     radius: (item.radius * 1.1).toFixed(2),
//   }));
// }

// const newPlanetsArr = planetsRadiusIncrease(planets);
// console.log(newPlanetsArr);

// ! Filter + map chain
// Давай теперь попробуем что-то новенькое. Представь, что ты разрабатываешь небольшой веб-сервис для кафе, который помогает владельцам анализировать отзывы посетителей. У тебя есть массив объектов, каждый из которых представляет отзыв и содержит информацию о блюде, оценке и комментарии. Твоя задача – написать функцию, которая принимает этот массив и возвращает новый массив, содержащий только названия блюд с оценками 5 звезд.

// Вот пример исходных данных:

// Твоя задача – написать функцию getTopDishes(reviews), которая возвращает массив названий блюд, получивших оценку 5. Не забудь, что оценки могут быть поданы не только как целые числа, так что будь внимателен!

// Как только справишься с этой задачей, кафе обещает бесплатный кофе за каждое блюдо в списке. Ну, по крайней мере в теории. 😄

// const reviews = [
//   { dish: 'Тирамису', rating: 5, comment: 'Восхитительно!' },
//   {
//     dish: 'Паста Карбонара',
//     rating: 4,
//     comment: 'Хорошо, но могло бы быть лучше.',
//   },
//   { dish: 'Маргарита', rating: 5, comment: 'Лучшая пицца!' },
//   { dish: 'Лазанья', rating: 3, comment: 'Слишком жирно для меня.' },
//   { dish: 'Ризотто с грибами', rating: 5, comment: 'Идеально!' },
// ];

// function getTopDishes(arr) {
//     const topDishesArr = arr.filter(item => item.rating === 5).map(item => item.dish);
//     return topDishesArr;
// }

// console.log(getTopDishes(reviews));

// ! Filter + map chain
// Представим, что у тебя есть список покупок, и ты хочешь преобразовать его, используя filter() и map(), чтобы получить только те товары, которые соответствуют твоему бюджету, и вывести их в удобном формате.

// У тебя есть массив объектов, где каждый объект представляет собой товар с его названием и ценой. Твоя задача — написать функцию, которая принимает этот массив и максимальную сумму, которую ты готов потратить, а возвращает список товаров в пределах этого бюджета в формате "Название товара - Цена".

// Пример исходных данных:

// const shoppingList = [
//   { name: 'Хлеб', price: 20 },
//   { name: 'Молоко', price: 30 },
//   { name: 'Кофе', price: 300 },
//   { name: 'Чай', price: 90 },
//   { name: 'Шоколад', price: 45 }
// ];

// function productsForBudget(arr, sum) {
//     return arr.filter(item => item.price <= sum).map(item => `${item.name} - ${item.price}`)
// }

// console.log(productsForBudget(shoppingList, 200));
