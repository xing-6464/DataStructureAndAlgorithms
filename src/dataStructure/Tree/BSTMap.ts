import type { Map } from '.'

class Node<K, V> {
  constructor(
    public key: K,
    public value: V,
    public left: Node<K, V> | null = null,
    public right: Node<K, V> | null = null
  ) {}
}

export class BSTMap<K extends { valueOf(): number | string }, V>
  implements Map<K, V>
{
  private root: Node<K, V> | null = null
  private _size = 0

  delete(key: K): V | null {
    const node = this.getNode(this.root, key)
    if (node !== null) {
      this.root = this._delete(this.root, key)
      return node.value
    }

    return null
  }

  private _delete(node: Node<K, V> | null, key: K): Node<K, V> | null {
    if (node === null) {
      return null
    }

    if (key.valueOf() < node.key.valueOf()) {
      node.left = this._delete(node.left, key)
      return node
    } else if (key.valueOf() > node.key.valueOf()) {
      node.right = this._delete(node.right, key)
      return node
    } else {
      // node.key === key

      if (node.left === null) {
        const rightNode = node.right
        node.right = null
        this._size--
        return rightNode
      }
      if (node.right === null) {
        const leftNode = node.left
        node.left = null
        this._size--
        return leftNode
      }

      const successor = this._min(node.right)
      successor.right = this._deleteMin(node.right)
      successor.left = node.left

      node.left = node.right = null
      return successor
    }
  }

  private _deleteMin(node: Node<K, V>): any {
    if (node?.left === null) {
      const rightNode = node.right
      node.right = null
      this._size--
      return rightNode
    }

    node!.left = this._deleteMin(node!.left)
    return node
  }

  private _min(node: Node<K, V>) {
    if (node?.left === null) {
      return node
    }

    return this._min(node?.left!)
  }

  has(key: K): boolean {
    return this.getNode(this.root, key) !== null
  }

  get(key: K): V | null {
    const node = this.getNode(this.root, key)
    return node === null ? null : node.value
  }

  private getNode(node: Node<K, V> | null, key: K) {
    if (node === null) {
      return null
    }

    if (key.valueOf() === node.key.valueOf()) {
      return node
    } else if (key.valueOf() < node.key.valueOf()) {
      return this.getNode(node.left, key)
    } else {
      return this.getNode(node.right, key)
    }
  }

  set(key: K, value: V) {
    this.root = this._set(this.root, key, value)
  }

  private _set(node: Node<K, V> | null, key: K, value: V) {
    if (node === null) {
      this._size++
      return new Node(key, value)
    }

    if (key.valueOf() < node.key.valueOf()) {
      node.left = this._set(node.left, key, value)
    } else if (key.valueOf() > node.key.valueOf()) {
      node.right = this._set(node.right, key, value)
    } else {
      node.value = value
    }

    return node
  }

  get size() {
    return this._size
  }

  isEmpty(): boolean {
    return this.size === 0
  }
}
