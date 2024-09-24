class MaxHeap<T extends { valueOf(): number | string }> {
  private data: T[]

  constructor(capacity: number = 1) {
    this.data = Array.from<T>({ length: capacity })
  }

  get size(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  // 返回当前索引的父节点的索引
  private parent(index: number): number {
    if (index === 0) throw new Error('No parent for root')

    return Math.floor((index - 1) / 2)
  }

  // 返回左孩子的索引
  private leftChild(index: number): number {
    return 2 * index + 1
  }

  // 返回右孩子的索引
  private rightChild(index: number): number {
    return 2 * index + 2
  }
}
