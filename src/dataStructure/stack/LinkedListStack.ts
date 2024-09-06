import LinkedList from '../LinkedList'
import type { Stack } from './type'

class LinkedListStack<T> implements Stack<T> {
  constructor(private list: LinkedList<T> = new LinkedList()) {}

  isEmpty(): boolean {
    return this.list.isEmpty()
  }
  get length(): number {
    return this.list.getSize()
  }

  push(item: T): void {
    this.list.addFirst(item)
  }

  peek(): T | undefined | null {
    return this.list.getFirst()
  }

  pop(): T | undefined | null {
    return this.list.removeFirst()
  }

  toString() {
    let res = ''
    res += 'Stack: top '
    res += this.list.toString()

    return res
  }
}

export default LinkedListStack
