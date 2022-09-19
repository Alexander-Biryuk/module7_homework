// task 3 Objects --------------------------------------------------------
// Написать функцию, которая создает пустой объект, но без прототипа.

function makeObjWithoutProto() {
  return Object.create(null)
}
const myObj = makeObjWithoutProto();