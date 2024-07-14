import MyArray from './dataStructure/Array'
import Student from './test/student'

const arr = new MyArray<Student>()

arr.push(new Student('John', 100))
arr.push(new Student('Mary', 80))
arr.push(new Student('Tom', 90))

console.info(`${arr}`)
