'use strict'
console.log('Задание 6')

let input
let totalNumber = 0

for (;;) {
  input = prompt('Введите число')
  if (input !== null) {
    const inputNumber = Number(input)
    if (Number.isNaN(inputNumber) === true) {
      alert('Было введено не число, попробуйте еще раз')
    } else {
      totalNumber += inputNumber
    }
  } else {
    break
  }
}
console.log(`Общая сумма чисел равна ${totalNumber}`)
