import { sortTest } from './test'
import { generateRandomArray, generateArray, swap } from './utils'
import LinkedList, { LinkedListStack } from './dataStructure/LinkedList'
import Stack, { IStack } from './dataStructure/Stack'

function main() {
  const opCount = 10000000

  const listStack = new LinkedListStack<number>()
  const time1 = testStack(listStack, opCount)
  console.log(`LinkedListStack: ${time1}s`)

  const arrayStack = new Stack<number>()
  const time2 = testStack(arrayStack, opCount)
  console.log(`ArrayStack: ${time2}s`)
}

function testStack(stack: IStack<number>, opCount: number) {
  const startTime = new Date().getTime()
  for (let i = 0; i < opCount; i++) {
    stack.push(Math.random() * Number.MAX_SAFE_INTEGER)
  }
  for (let i = 0; i < opCount; i++) {
    stack.pop()
  }
  const endTime = new Date().getTime()

  return `${(endTime - startTime) / 1000}`
}

main()
