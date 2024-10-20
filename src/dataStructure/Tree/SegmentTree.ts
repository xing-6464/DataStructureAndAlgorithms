export type Merger<T> = (a: T, b: T) => T

class SegmentTree<T> {
  constructor(
    private data: T[],
    private merger: Merger<T>,
    private tree: (T | null)[] = Array.from(
      { length: 4 * data.length },
      () => null
    )
  ) {
    this.buildSegmentTree(0, 0, data.length - 1)
  }

  // 在treeIndex位置创建表示区间[l...r]的线段树
  private buildSegmentTree(treeIndex: number, l: number, r: number) {
    if (l === r) {
      this.tree[treeIndex] = this.data[l]
      return
    }

    const leftChildIndex = this.leftChild(treeIndex)
    const rightChildIndex = this.rightChild(treeIndex)

    const mid = l + Math.floor((r - l) / 2)

    this.buildSegmentTree(leftChildIndex, l, mid)
    this.buildSegmentTree(rightChildIndex, mid + 1, r)

    this.tree[treeIndex] = this.merger(
      this.tree[leftChildIndex]!,
      this.tree[rightChildIndex]!
    )
  }

  get size() {
    return this.data.length
  }

  get(index: number) {
    if (index < 0 || index >= this.data.length)
      throw new Error('Index out of range')
    return this.data[index]
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子的索引
  leftChild(index: number) {
    return 2 * index + 1
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子的索引
  rightChild(index: number) {
    return 2 * index + 2
  }

  query(queryL: number, queryR: number) {
    if (
      queryL < 0 ||
      queryL >= this.data.length ||
      queryR < 0 ||
      queryR >= this.data.length ||
      queryL > queryR
    )
      throw new Error('Index out of range')

    return this._query(0, 0, this.data.length - 1, queryL, queryR)
  }

  // 在以treeID为根的线段树中，[l...r]区间,搜索区间[queryL...queryR]的值
  private _query(
    treeIndex: number,
    l: number,
    r: number,
    queryL: number,
    queryR: number
  ) {
    if (l === queryL && r === queryR) {
      return this.tree[treeIndex]
    }

    const mid = l + Math.floor((r - l) / 2)
    const leftChildIndex = this.leftChild(treeIndex)
    const rightChildIndex = this.rightChild(treeIndex)

    if (queryL >= mid + 1) {
      return this._query(rightChildIndex, mid + 1, r, queryL, queryR)
    } else if (queryR <= mid) {
      return this._query(leftChildIndex, l, mid, queryL, queryR)
    }

    const leftResult = this._query(leftChildIndex, l, mid, queryL, mid)
    const rightResult = this._query(
      rightChildIndex,
      mid + 1,
      r,
      mid + 1,
      queryR
    )

    return this.merger(leftResult, rightResult)
  }

  toString() {
    let s = '['
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i] != null) {
        s += this.tree[i]
      } else {
        s += 'null'
      }

      if (i !== this.tree.length - 1) {
        s += ', '
      }
    }
    s += ']'
    return s
  }
}

export default SegmentTree
