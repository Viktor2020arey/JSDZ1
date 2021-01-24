// pricePerDroid - цена одного дроида, значение 800;
// orderedQuantity - количество дроидов в заказе, значение 6;
// deliveryFee - стоимость доставки, значение 50;
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
// message - сообщение о состоянии заказа в формате; Вы заказали дроидов на сумму < сумма заказа > кредитов.Доставка(<цена доставки> кредитов) включена в сумму заказа.

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов.Доставка(${deliveryFee} кредитов) включена в сумму заказа.`;

// function sayHi() {
//     console.log('Привет, это моя первая функция!');
// }
// function sayHi();

// function makeMessage(name, price) {
//   // Пиши код ниже этой строки
//   const message = `Вы выбрали $(name), цена за штуку $(price) кредитов`;
//   // Пиши код выше этой строки
//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//   if (ordered > available) {
//     let message = "На складе недостаточно товаров!";
//   } else {
//     let message = "Заказ оформлен, с вами свяжется менеджер";
//   }

//   // Пиши код выше этой строки
//   return message;
// }

// if (ordered === null) {
//   message = "В заказе еще нет товаров";
// } else if (ordered > available) {
//   message = "Слишком большой заказ, на складе недостаточно товаров!";
// } else {
//   ("Заказ оформлен, с вами свяжется менеджер");
// }

// function getSubscriptionPrice(type) {
//   let price;
// Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case 'starter'// Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case 'professional'// Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case 'organization'// Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }

// function normalizeInput(input) {
//   const normalizedInput = toLowerCase(input); // Дополни эту строку
//   return normalizedInput;
// }
// -------------------------------------------
// function filterArray(numbers, value)
// // Пиши код ниже этой строки
// const newArray = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     newArray.push(numbers[i])
//   }
// }
// return newArray

// Пиши код выше этой строки

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Генри Сибола",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Ямайка", city: "Кингстон",
// };

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: "henry.carter@aptmail.com",

//   [passwordInputName]: "jqueryismyjam",

// Пиши код выше этой строки
// };

// const c = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   keys.push(key);
//   const apartment = {
//     descr: "Просторная квартира в центре",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Пиши код ниже этой строки
//   for (const key in apartment) {
//     keys.push(key);
//   }
//   apartment[key];
// }

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   // const keys = Object.keys(object);
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Пиши код выше этой строки
//   return propCount;
//   console.log(propCount);
// }
// -------------------------------------
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const keys = Object.keys(salaries);
//   const values = Object.values(salaries);
//   for (const key in salaries) {
//     if (Object.hasOwnProperty(key)) {
//       totalSalary += salaries[key];
//     }
//   }

//   // Пиши код выше этой строки
//   return totalSalary;
// }

// ---------------------------------
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
// }
// Пиши код выше этой строки

// ------------------------------------------
// Пиши код ниже этой строки
// function findMatches(array, ...args) {
//   const matches = []; // Не изменяй эту строку

//   for (const item of args) {
//     if (array.includes(item)) {
//       matches.puch(item);
//     }
//   }
//   // Пиши код выше этой строки
//   return matches;
// }

// 34
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ["Последнее королевство", "Страж снов"],
//   getBooks() {
//     return "Возвращаем все книги";
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };

// 36
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };

// // 37
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   getPotions() {
//     return this.potions;
//   },
//   // Пиши код выше этой строки
// };

// 38
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };

// 39
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);

//     // Пиши код ниже этой строки
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

// 40
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   updatePotionName(oldName, newName) {
//     const indexToChange = this.potions.indexOf(oldName);
//     this.potions.splice(indexToChange, 1, newName);
//     // Пиши код ниже этой строки
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

// 41
// const atTheOldToad = {
//   potions: [
//     { name: "Зелье скорости", price: 460 },
//     { name: "Дыхание дракона", price: 780 },
//     { name: "Каменная кожа", price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(NewPotion) {
//     this.potions.push(NewPotion);
//     return atTheOldToad.getPotions();
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
// };
