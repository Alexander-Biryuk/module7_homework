// task 2 Objects --------------------------------------------------------
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет 
// есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function checkForProperty(str, obj) {
  return str in obj;
}

const myObj = {
  city: 'Moscow',
  age: '46',
  job: 'Devepoler',
}

console.log(checkForProperty('city', myObj));
