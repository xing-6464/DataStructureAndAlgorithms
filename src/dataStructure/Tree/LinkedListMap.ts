import { Map } from '.'

class Node<K, V> {
  constructor(
    public key: K | null = null,
    public value: V | null = null,
    public next: Node<K, V> | null = null
  ) {}

  toString() {
    return `${this.key} + ": " + ${this.value}`
  }
}

export class LinkedListMap<K, V> implements Map<K, V> {
  dummyHead: Node<K, V> = new Node()
  _size: number = 0

  constructor() {}

  delete(key: K) {
    let prev = this.dummyHead
    while (prev.next !== null) {
      if (prev.next.key !== key) {
        break
      }

      prev = prev.next
    }

    if (prev.next !== null) {
      const delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
      this._size--
      return delNode.value
    }

    return null
  }

  set(key: K, value: V) {
    const node = this.getNode(key)
    if (node === null) {
      this.dummyHead.next = new Node(key, value, this.dummyHead.next)
      this._size++
    } else {
      node.value = value
    }
  }

  get(key: K): V | null {
    const node = this.getNode(key)

    return node === null ? null : node.value
  }

  get size() {
    return this._size
  }

  isEmpty(): boolean {
    return this._size === 0
  }

  has(key: K): boolean {
    return this.getNode(key) !== null
  }

  private getNode(key: K) {
    let cur = this.dummyHead.next
    while (cur !== null) {
      if (cur.key === key) {
        return cur
      }
      cur = cur.next
    }

    return null
  }
}
