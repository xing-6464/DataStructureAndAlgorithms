import MyArray from './dataStructure/Array'
import Student from './test/student'

const arr = new MyArray()

for (let i = 0; i < 10; i++) {
  arr.push(i)
}

console.log(arr.toString())

arr.unshift(10)
console.log(arr.toString())

for (let i = 0; i < 6; i++) {
  arr.pop()
}

console.log(arr.toString())
