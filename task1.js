// task 1 Objects --------------------------------------------------------
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
// все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function showKeysAndProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ: ${key}; Свойство: ${obj[key]}`);
    }
  }
}
const myObj = {
  city: 'Moscow',
  age: '46',
  job: 'Devepoler',
}
showKeysAndProperties(myObj);