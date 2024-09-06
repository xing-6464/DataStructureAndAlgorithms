import type { Stack } from './type'
import ArrayStack from './ArrayStack'
import LinkedListStack from './LinkedListStack'

export function testStack(stack: Stack<number>, opCount: number) {
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

export function testAllStack(opCount: number = 100000) {
  const listStack = new LinkedListStack<number>()
  const time1 = testStack(listStack, opCount)
  console.log(`LinkedListStack: ${time1}s`)

  const arrayStack = new ArrayStack<number>()
  const time2 = testStack(arrayStack, opCount)
  console.log(`ArrayStack: ${time2}s`)
}

export { LinkedListStack, ArrayStack }
