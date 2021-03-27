'use strict'
console.log('Задание 6')

let input
let totalNumber = 0
do {
  input = prompt('Введите число')
  const inputNumber = Number(input)
  if (Number.isNaN(inputNumber) === true) {
    alert('Было введено не число, попробуйте еще раз')
  } else {
    totalNumber += inputNumber
  }
} while (input !== null)
console.log(`Общая сумма чисел равна ${totalNumber}`)
