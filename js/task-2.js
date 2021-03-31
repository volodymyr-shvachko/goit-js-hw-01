'use strict'
console.log('Задание 2')

const STATUS_TRUE = 'На складе недостаточно твоаров!'
const STATUS_FALSE = 'Заказ оформлен, с вами свяжется менеджер'

const total = 100
let ordered = 50
console.log(
  ordered > total
    ? STATUS_TRUE
    : STATUS_FALSE,
)
ordered = 20
console.log(
  ordered > total
    ? 'На складе недостаточно твоаров!'
    : 'Заказ оформлен, с вами свяжется менеджер',
)
ordered = 80
console.log(
  ordered > total
    ? 'На складе недостаточно твоаров!'
    : 'Заказ оформлен, с вами свяжется менеджер',
)
ordered = 130
console.log(
  ordered > total
    ? 'На складе недостаточно твоаров!'
    : 'Заказ оформлен, с вами свяжется менеджер',
)
