import { Node } from '../LinkedList'
import type { Queue } from './type'

class LinkedListQueue<T> implements Queue<T> {
  private head: Node<T> | null = null
  private tail: Node<T> | null = null
  private size = 0

  constructor() {}

  enqueue(item: T): void {
    if (this.tail === null) {
      this.tail = new Node(item)
      this.head = this.tail
    } else {
      this.tail.next = new Node(item)
      this.tail = this.tail.next
    }
    this.size++
  }
  dequeue(): T | undefined | null {
    if (this.isEmpty()) throw new RangeError('Queue is empty')

    const retNode = this.head
    this.head = this.head!.next
    retNode!.next = null
    if (this.head === null) this.tail = null

    this.size--
    return retNode!.n
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  getFront(): T | undefined | null {
    if (this.isEmpty()) throw new RangeError('Queue is empty')
    return this.head?.n
  }

  get length(): number {
    return this.size
  }

  toString(): string {
    let str = ''
    str += 'Queue: front '

    let cur = this.head
    while (cur !== null) {
      str += cur.n + '->'
      cur = cur.next
    }
    str += 'NULL tail'

    return str
  }
}

export default LinkedListQueue
