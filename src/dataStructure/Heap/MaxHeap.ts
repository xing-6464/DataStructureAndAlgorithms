export class MaxHeap<T extends { valueOf(): number | string }> {
  constructor(private data: T[] = []) {}

  get size(): number {
    return this.data.length
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  // 向堆中插入一个元素
  add(value: T) {
    this.data.push(value)
    this.shiftUp(this.size - 1)
  }

  private shiftUp(index: number) {
    let i = index
    while (i > 0 && this.data[this.parent(i)] < this.data[i]) {
      this.swap(i, this.parent(i))
      i = this.parent(i)
    }
  }

  findMax() {
    if (this.size === 0) {
      throw new Error('Heap is empty')
    }

    return this.data[0]
  }

  extractMax() {
    const ret = this.findMax()

    this.swap(0, this.size - 1)
    this.data.pop()
    this.shiftDown(0)

    return ret
  }

  private shiftDown(index: number) {
    while (this.leftChild(index) < this.size) {
      let j = this.leftChild(index)
      if (j + 1 < this.size && this.data[j + 1] > this.data[j]) {
        j = this.rightChild(index)
      }

      if (this.data[index] >= this.data[j]) {
        break
      }

      this.swap(index, j)
      index = j
    }
  }

  // 返回当前索引的父节点的索引
  private parent(index: number): number {
    if (index === 0) throw new Error('No parent for root')

    return ((index - 1) / 2) | 0
  }

  // 返回左孩子的索引
  private leftChild(index: number): number {
    return 2 * index + 1
  }

  // 返回右孩子的索引
  private rightChild(index: number): number {
    return 2 * index + 2
  }

  private swap(i: number, j: number) {
    if (i < 0 || i >= this.size || j < 0 || j >= this.size) {
      throw new Error('Index out of range')
    }
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }
}
