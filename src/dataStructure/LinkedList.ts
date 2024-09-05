class LinkedList<T> {
  private dummyHead: Node<T>
  private size: number

  constructor() {
    this.dummyHead = new Node()
    this.size = 0
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
    let curr: Node<T> | null = this.dummyHead
    while (curr) {
      res += curr.toString() + '->'
      curr = curr.next
    }

    res += 'null'
    return res.slice(11) // remove the 'undefined->' at the beginning
  }
}

class Node<T> {
  constructor(public n: T | null = null, public next: Node<T> | null = null) {}

  toString() {
    return this.n?.toString()
  }
}

export default LinkedList
