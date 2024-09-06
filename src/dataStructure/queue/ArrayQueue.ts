import MyArray from '../Array'
import type { Queue } from './type'

class ArrayQueue<T> implements Queue<T> {
  private array: MyArray<T>

  constructor(capacity?: number) {
    if (capacity) {
      this.array = new MyArray<T>(capacity)
    } else {
      this.array = new MyArray<T>()
    }
  }

  enqueue(value: T): void {
    this.array.unshift(value)
  }
  dequeue(): T | undefined {
    return this.array.shift()
  }
  isEmpty(): boolean {
    return this.array.isEmpty()
  }
  getFront(): T | undefined {
    return this.array.get(0)
  }
  get length(): number {
    return this.array.length
  }

  toString() {
    let res = ''
    res += 'Queue: front ['
    for (let i = 0; i < this.array.length; i++) {
      res += this.array.get(i)
      if (i !== this.array.length - 1) {
        res += ', '
      }
    }
    res += '] tail'
    return res
  }
}

export default ArrayQueue
