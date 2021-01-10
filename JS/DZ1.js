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

function normalizeInput(input) {
  const normalizedInput = toLowerCase(input); // Дополни эту строку
  return normalizedInput;
}
