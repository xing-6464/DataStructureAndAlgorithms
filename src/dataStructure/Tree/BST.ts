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
    this.root = this._add(this.root, e)
  }

  // 向node为根的二叉搜索树中插入元素e，递归算法
  // 返回插入新节点后二分搜索树的根
  private _add(node: Node<T> | null, e: T) {
    // if (e.valueOf() === node.e.valueOf()) {
    //   return
    // } else if (e.valueOf() < node.e.valueOf() && node.left === null) {
    //   node.left = new Node(e)
    //   this.size++
    //   return
    // } else if (e.valueOf() > node.e.valueOf() && node.right === null) {
    //   node.right = new Node(e)
    //   this.size++
    //   return
    // }

    if (node === null) {
      this.size++
      return new Node(e)
    }

    if (e.valueOf() < node.e.valueOf()) {
      node.left = this._add(node.left!, e)
    } else if (e.valueOf() > node.e.valueOf()) {
      node.right = this._add(node.right!, e)
    }

    return node
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  get length(): number {
    return this.size
  }
}
