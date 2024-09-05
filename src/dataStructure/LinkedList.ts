class LinkedList<T> {
  private dummyHead: Node<T>
  private size: number

  constructor() {
    this.dummyHead = new Node()
    this.size = 0
  }

  get(index: number) {
    if (index < 0 || index >= this.size)
      throw new RangeError('Index out of bounds')

    let curr: Node<T> | null = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      curr = curr!.next
    }

    return curr!.n
  }

  getFirst() {
    return this.get(0)
  }

  getLast() {
    return this.get(this.size - 1)
  }

  set(index: number, n: T) {
    if (index < 0 || index >= this.size)
      throw new RangeError('Index out of bounds')

    let curr: Node<T> | null = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      curr = curr!.next
    }

    curr!.n = n
  }

  contains(n: T, fn?: (curN: T | null) => boolean) {
    let curr: Node<T> | null = this.dummyHead.next
    while (curr) {
      if (fn && fn(curr.n)) {
        return true
      } else {
        if (curr.n === n) {
          return true
        }
      }
      curr = curr.next
    }

    return false
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  addFirst(n: T) {
    this.add(0, n)
  }

  add(index: number, n: T) {
    if (index < 0 || index > this.size)
      throw new RangeError('Index out of bounds')

    let prev: Node<T> | null = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev!.next
    }

    // const node = new Node(n)
    // node.next = prev!.next
    // prev!.next = node

    prev!.next = new Node(n, prev!.next)
    this.size++
  }

  addLast(n: T) {
    this.add(this.size, n)
  }

  toString() {
    let res = ''
    let curr: Node<T> | null = this.dummyHead.next
    while (curr) {
      res += curr.toString() + '->'
      curr = curr.next
    }

    res += 'null'
    return res
  }
}

class Node<T> {
  constructor(public n: T | null = null, public next: Node<T> | null = null) {}

  toString() {
    return this.n?.toString()
  }
}

export default LinkedList
