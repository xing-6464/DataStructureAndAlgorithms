import Student from './test/student'
import ArrayStack from './dataStructure/Stack'
import Queue from './dataStructure/Queue'

const arr = new ArrayStack()

const queue = new Queue<number>()

queue.unshift(10)
queue.unshift(20)
queue.unshift(30)
queue.unshift(40)

console.log(queue.toString())

queue.shift()
console.log(queue.toString())
