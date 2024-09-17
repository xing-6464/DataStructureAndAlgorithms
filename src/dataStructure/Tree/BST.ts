interface INode {
  valueOf(): number | string
}

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

export class BST<T extends INode> {
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
