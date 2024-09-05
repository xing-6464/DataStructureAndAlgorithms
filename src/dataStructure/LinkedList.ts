class LinkedList<T> {
  private head: Node<T> | null
  private size: number

  constructor() {
    this.head = null
    this.size = 0
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  addFirst(n: T) {
    // const node = new Node(n)
    // node.next = this.head
    // this.head = node

    this.head = new Node(n, this.head)

    this.size++
  }

  add(index: number, n: T) {
    if (index < 0 || index > this.size)
      throw new RangeError('Index out of bounds')

    if (index === 0) {
      this.addFirst(n)
    } else {
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev!.next
      }

      // const node = new Node(n)
      // node.next = prev!.next
      // prev!.next = node

      prev!.next = new Node(n, prev!.next)
      this.size++
    }
  }

  addLast(n: T) {
    this.add(this.size, n)
  }

  toString() {
    let res = ''
    let curr = this.head
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
