'use strict'
console.log('Задание 3')

let message
const ADMIN_PASSWORD = 'hello'
const inputPassword = prompt('Please, enter password')
if (inputPassword === null) {
  message = 'Отменено пользователем'
} else if (inputPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!'
} else {
  message = 'Доступ запрещен, неверный пароль!'
}
alert(message)
