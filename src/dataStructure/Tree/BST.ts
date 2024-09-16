class Node<T> {
  e: T
  left: Node<T> | null
  right: Node<T> | null

  constructor(e: T) {
    this.e = e
    this.left = null
    this.right = null
  }
}

export class BST<T extends { valueOf(): number }> {
  private root: Node<T> | null
  private size: number

  constructor() {
    this.root = null
    this.size = 0
  }

  add(e: T) {
    if (this.root === null) {
      this.root = new Node(e)
      this.size++
    } else {
      this._add(this.root, e)
    }
  }

  private _add(node: Node<T>, e: T) {
    if (e.valueOf() === node.e.valueOf()) {
      return
    } else if (e.valueOf() < node.e.valueOf() && node.left === null) {
      node.left = new Node(e)
      this.size++
      return
    } else if (e.valueOf() > node.e.valueOf() && node.right === null) {
      node.right = new Node(e)
      this.size++
      return
    }

    if (e.valueOf() < node.e.valueOf()) {
      this._add(node.left!, e)
    } else {
      this._add(node.right!, e)
    }
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  get length(): number {
    return this.size
  }
}
