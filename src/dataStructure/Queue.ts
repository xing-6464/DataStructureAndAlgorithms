import MyArray from './Array'

export interface IQueue<T> {
  unshift(value: T): void
  shift(): T | undefined
  isEmpty(): boolean
  get front(): T | undefined
  get length(): number
}

class Queue<T> implements IQueue<T> {
  private array: MyArray<T>

  constructor(capacity?: number) {
    if (capacity) {
      this.array = new MyArray<T>(capacity)
    } else {
      this.array = new MyArray<T>()
    }
  }

  unshift(value: T): void {
    this.array.unshift(value)
  }
  shift(): T | undefined {
    return this.array.shift()
  }
  isEmpty(): boolean {
    return this.array.isEmpty()
  }
  get front(): T | undefined {
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

export default Queue
