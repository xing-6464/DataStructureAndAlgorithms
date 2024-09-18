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

export class BST<T extends { valueOf(): number | string }> {
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

  // 向node为根的二叉搜索树中插入元素e，非递归算法
  private _add2(node: Node<T> | null, e: T) {
    if (node === null) {
      this.size++
      this.root = new Node(e)
      return
    }

    let cur = node
    while (cur !== null) {
      if (e.valueOf() < cur.e.valueOf()) {
        if (cur.left === null) {
          cur.left = new Node(e)
          this.size++
          return
        }
        cur = cur.left
      } else if (e.valueOf() > cur.e.valueOf()) {
        if (cur.right === null) {
          cur.right = new Node(e)
          this.size++
          return
        }
        cur = cur.right
      } else {
        // e.valueOf() === cur.e.valueOf(), 元素已存在, 不插入
        return
      }
    }
  }

  contains(e: T) {
    return this._contains(this.root, e)
  }

  private _contains(node: Node<T> | null, e: T): boolean {
    if (node === null) {
      return false
    }

    // == 会调用valueOf方法
    if (node.e.valueOf() === e.valueOf()) {
      return true
    } else if (e.valueOf() < node.e.valueOf()) {
      return this._contains(node.left, e)
    } else {
      return this._contains(node.right, e)
    }
  }

  // 前序遍历, 递归，中-左-右
  preOrder() {
    this._preOrder(this.root)
  }

  // 前序遍历, 非递归，中-左-右
  preOrderNR() {
    if (this.root === null) return

    const stack: Array<Node<T>> | null = []

    stack.push(this.root)
    while (stack.length !== 0) {
      let cur = stack.pop()
      if (cur == null) continue

      console.log(cur.e)
      if (cur.right !== null) {
        stack.push(cur.right)
      }
      if (cur.left !== null) {
        stack.push(cur.left)
      }
    }
  }

  private _preOrder(node: Node<T> | null) {
    if (node === null) return

    console.log(node.e)
    this._preOrder(node.left)
    this._preOrder(node.right)
  }

  // 中序遍历, 递归，左-中-右
  inOrder() {
    this._inOrder(this.root)
  }

  // 中序遍历, 非递归，左-中-右
  inOrderNR() {
    if (this.root === null) return

    const stack: Array<Node<T>> = []

    // 先把最左边的节点入栈
    stack.push(this.root)
    let cur = this.root.left
    while (cur !== null) {
      stack.push(cur)
      cur = cur.left
    }

    // 弹出栈顶节点，打印，并将右子树入栈
    while (stack.length !== 0) {
      const inCur = stack.pop() as Node<T>
      console.log(inCur.e)

      if (inCur.right !== null) {
        stack.push(inCur.right)

        // 右子树入栈后，再把右子树的最左边的节点入栈
        let cur = inCur.right.left
        while (cur !== null) {
          stack.push(cur)
          cur = cur.left
        }
      }
    }
  }

  private _inOrder(node: Node<T> | null) {
    if (node === null) return

    this._inOrder(node.left)
    console.log(node.e)
    this._inOrder(node.right)
  }

  // 后序遍历, 递归，左-右-中
  postOrder() {
    this._postOrder(this.root)
  }

  // 后序遍历, 非递归，左-右-中
  postOrderNR() {
    if (this.root === null) return
    const stack: Array<Node<T>> = []

    // 先把最左边的节点入栈
    stack.push(this.root)
    let cur = this.root.left
    while (cur !== null) {
      stack.push(cur)
      cur = cur.left
    }

    // 弹出栈顶节点，打印，并将右子树入栈
    while (stack.length !== 0) {
      const postCur = stack.pop() as Node<T>

      // 先打印右子树，再打印自己
      if (postCur.right !== null) {
        stack.push(new Node(postCur.e))
        stack.push(postCur.right)

        let cur = postCur.right.left
        while (cur !== null) {
          stack.push(cur)
          cur = cur.left
        }
      } else {
        console.log(postCur.e)
      }
    }
  }

  private _postOrder(node: Node<T> | null) {
    if (node === null) return

    this._postOrder(node.left)
    this._postOrder(node.right)
    console.log(node.e)
  }

  // 广度优先搜索
  levelOrder() {
    if (this.root === null) return

    const queue: Array<Node<T>> = []
    queue.push(this.root)

    while (queue.length !== 0) {
      const cur = queue.shift() as Node<T>
      console.log(cur.e)

      if (cur.left !== null) {
        queue.push(cur.left)
      }
      if (cur.right !== null) {
        queue.push(cur.right)
      }
    }
  }

  maximum() {
    if (this.size === 0) throw new Error('BST is empty')

    return this._maximum(this.root).e
  }

  private _maximum(node: Node<T> | null): Node<T> {
    if (node?.right === null) {
      return node
    }

    return this._maximum(node?.right!)
  }

  minimum() {
    if (this.size === 0) throw new Error('BST is empty')

    return this._minimum(this.root).e
  }

  removeMin() {
    const minNode = this.minimum()

    this._removeMin(this.root)
    return minNode
  }

  private _removeMin(node: Node<T> | null): Node<T> | null {
    if (node?.left === null) {
      const rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }

    node!.left = this._removeMin(node!.left)
    return node
  }

  removeMax() {
    const maxNode = this.maximum()
    this._removeMax(this.root)
    return maxNode
  }

  private _removeMax(node: Node<T> | null): Node<T> | null {
    if (node?.right === null) {
      const leftNode = node.left
      node.right = null
      this.size--
      return leftNode
    }

    node!.right = this._removeMax(node!.right)
    return node
  }

  // 递归删除节点
  remove(e: T) {
    this.root = this._remove(this.root, e)
  }

  private _remove(node: Node<T> | null, e: T): Node<T> | null {
    if (node === null) {
      return null
    }

    if (e.valueOf() < node.e.valueOf()) {
      node.left = this._remove(node.left, e)
      return node
    } else if (e.valueOf() > node.e.valueOf()) {
      node.right = this._remove(node.right, e)
      return node
    } else {
      // e.valueOf() === node.e.valueOf()

      // 待删除节点左子树为空
      if (node.left === null) {
        const rightNode = node.right
        node.left = null
        this.size--
        return rightNode
      }

      // 待删除节点右子树为空
      if (node.right === null) {
        const leftNode = node.left
        node.right = null
        this.size--
        return leftNode
      }

      // 待删除节点左右子树均不为空
      // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
      // 用这个节点顶替待删除节点的位置
      const successor = this._minimum(node.right)
      successor.right = this._removeMin(node.right)
      successor.left = node.left

      node.left = node.right = null
      return successor
    }
  }

  private _minimum(node: Node<T> | null): Node<T> {
    if (node?.left === null) {
      return node
    }

    return this._minimum(node?.left!)
  }

  toString() {
    let res = {
      s: '',
    }
    this.generateBSTString(this.root, 0, res)
    return res.s
  }

  // 生成以node为根节点，深度为depth的描述二叉树的字符串
  private generateBSTString(
    node: Node<T> | null,
    depth: number,
    res: { s: string }
  ) {
    if (node === null) {
      res.s += this.generateDepthString(depth) + 'null\n'
      return
    }

    res.s += this.generateDepthString(depth) + node.e.toString() + '\n'
    this.generateBSTString(node.left, depth + 1, res)
    this.generateBSTString(node.right, depth + 1, res)
  }

  private generateDepthString(depth: number) {
    let res = ''
    for (let i = 0; i < depth; i++) {
      res += '--'
    }
    return res
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  get length(): number {
    return this.size
  }
}
