class SegmentTree<T> {
  constructor(
    private data: T[],
    private tree: (T | null)[] = Array.from(
      { length: 4 * data.length },
      () => null
    )
  ) {}

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
}
