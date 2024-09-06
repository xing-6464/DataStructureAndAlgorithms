// import type { IQueue } from "./ArrayQueue"
import type { Queue } from './type'

class LoopQueue<T> implements Queue<T> {
  private data: T[] = []
  private front = 0
  private tail = 0
  private size = 0

  constructor(capacity: number = 10) {
    this.data = new Array<T>(capacity + 1)
    this.front = 0
    this.tail = 0
    this.size = 0
  }
  enqueue(item: T): void {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.capacity * 2)
    }

    this.data[this.tail] = item
    this.tail = (this.tail + 1) % this.data.length
    this.size++
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new RangeError('Queue is empty.')
    }
    const item = this.data[this.front]
    this.front = (this.front + 1) % this.data.length
    this.size--

    if (
      this.size === Math.floor(this.capacity / 4) &&
      this.capacity / 2 !== 0
    ) {
      this.resize(Math.floor(this.capacity / 2))
    }
    return item
  }

  isEmpty(): boolean {
    return this.front === this.tail
  }

  getFront(): T | undefined {
    if (this.isEmpty()) {
      throw new RangeError('Queue is empty.')
    }
    return this.data[this.front]
  }

  get length(): number {
    return this.size
  }

  get capacity(): number {
    return this.data.length - 1
  }

  private resize(capacity: number) {
    const newData = new Array<T>(capacity + 1)
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[(this.front + i) % this.data.length]
    }
    this.data = newData
    this.front = 0
    this.tail = this.size
  }

  toString() {
    let res = ''
    res += `LoopQueue: length = ${this.size}, capacity = ${this.capacity}   \n`
    res += 'front ['
    for (let i = this.front; i != this.tail; i = (i + 1) % this.data.length) {
      res += this.data[i]
      if ((i + 1) % this.data.length !== this.tail) {
        res += ', '
      }
    }
    res += '] tail'
    return res
  }
}

export default LoopQueue
