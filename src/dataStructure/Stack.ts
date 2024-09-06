import MyArray from './Array'

export interface IStack<T> {
  push(item: T): void
  pop(): T | undefined | null
  peek(): T | undefined | null
  isEmpty(): boolean
  get length(): number
}

class Stack<T> implements IStack<T> {
  private array: MyArray<T>

  constructor(capacity?: number) {
    if (capacity) {
      this.array = new MyArray(capacity)
    } else {
      this.array = new MyArray()
    }
  }

  push(item: T): void {
    this.array.push(item)
  }

  pop(): T | undefined {
    return this.array.pop()
  }

  peek(): T | undefined {
    return this.array.last
  }

  isEmpty(): boolean {
    return this.array.isEmpty()
  }

  get length(): number {
    return this.array.length
  }

  toString() {
    let res = ''
    res += 'Stack: ['
    for (let i = 0; i < this.array.length; i++) {
      res += this.array.get(i)
      if (i !== this.array.length - 1) {
        res += ', '
      }
    }
    res += '] top'
    return res
  }
}

export default Stack
