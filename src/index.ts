import Student from './test/student'
import ArrayStack from './dataStructure/Stack'
import Queue from './dataStructure/Queue'
import LoopQueue from './dataStructure/LoopQueue'

const loopQueue = new LoopQueue<number>()

loopQueue.enqueue(1)
loopQueue.enqueue(2)
loopQueue.enqueue(3)
loopQueue.enqueue(4)
loopQueue.enqueue(2)
loopQueue.dequeue()
loopQueue.dequeue()
loopQueue.dequeue()

console.log(loopQueue.toString())
