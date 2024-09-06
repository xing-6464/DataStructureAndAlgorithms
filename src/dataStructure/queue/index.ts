import type { Queue } from './type'
import ArrayQueue from './ArrayQueue'
import LoopQueue from './LoopQueue'
import LinkedQueue from './LinkedListQueue'

export function testQueue(q: Queue<number>, opCount: number) {
  const startTime = new Date().getTime()
  for (let i = 0; i < opCount; i++) {
    q.enqueue(Math.random() * Number.MAX_SAFE_INTEGER)
  }
  for (let i = 0; i < opCount; i++) {
    q.dequeue()
  }
  const endTime = new Date().getTime()

  return `${(endTime - startTime) / 1000}`
}

export function testAllQueue(opCount: number = 100000) {
  if (opCount <= 100000) {
    const arrayQueue = new ArrayQueue<number>()
    const time1 = testQueue(arrayQueue, opCount)
    console.log(`ArrayQueue: ${time1}s`)
  }

  const loopQueue = new LoopQueue<number>()
  const time2 = testQueue(loopQueue, opCount)
  console.log(`LoopQueue: ${time2}s`)

  const linkedQueue = new LinkedQueue<number>()
  const time3 = testQueue(linkedQueue, opCount)
  console.log(`LinkedQueue: ${time3}s`)
}

export { ArrayQueue, LoopQueue, LinkedQueue, type Queue }
