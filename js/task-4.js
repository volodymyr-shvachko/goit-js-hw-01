'use strict'
console.log('Задание 4')

const credit = 23580
const priceDroid = 3000
const numberDroid = prompt('Для заказа введите количество дроидов')
if (numberDroid === null) {
  console.log('Отменено пользователем')
} else {
  const totalPrice = Number(numberDroid) * priceDroid
  if (totalPrice > credit) {
    console.log('Недостаточно средств на счету!')
  } else {
    console.log(
      `Вы купили ${numberDroid} дроидов, на счету осталось ${
        credit - totalPrice
      } кредитов.`,
    )
  }
}
