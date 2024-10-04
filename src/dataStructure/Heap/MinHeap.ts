export class MinHeap<T extends { valueOf(): number | string }> {
  constructor(private heap: T[] = []) {
    this.heapify(heap)
  }

  add(value: T) {
    this.heap.push(value)

    this.shiftUp(this.heap.length - 1)
  }

  getMin(): T | undefined {
    return this.heap[0]
  }

  // 取出最小值并删除
  extractMin(): T | undefined {
    if (this.heap.length === 0) return undefined
    const ret = this.heap[0]

    this.swap(0, this.heap.length - 1)
    this.heap.pop()
    this.shiftDown(0)

    return ret
  }

  heapify(arr: T[]) {
    this.heap = arr
    for (let i = MinHeap.parent(arr.length - 1); i >= 0; i--) {
      this.shiftDown(i)
    }
  }

  // 取出最小值并且替换最新值
  replace(val: T) {
    const ret = this.heap[0]
    this.heap[0] = val
    this.shiftDown(0)

    return ret
  }

  private shiftDown(index: number) {
    while (MinHeap.leftChild(index) < this.heap.length) {
      let j = MinHeap.leftChild(index)

      if (j + 1 < this.heap.length && this.heap[j + 1] < this.heap[j]) {
        j = j + 1
      }

      if (this.heap[index] <= this.heap[j]) break

      this.swap(index, j)
      index = j
    }
  }

  private shiftUp(index: number) {
    let i = index
    while (i > 0 && this.heap[MinHeap.parent(i)] > this.heap[i]) {
      this.swap(i, MinHeap.parent(i))
      i = MinHeap.parent(i)
    }
  }

  private swap(index1: number, index2: number) {
    const temp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  get size(): number {
    return this.heap.length
  }

  private static parent(index: number): number {
    if (index <= 0) throw new Error('Invalid index')
    return Math.floor((index - 1) / 2)
  }

  private static leftChild(index: number): number {
    if (index < 0) throw new Error('Invalid index')
    return 2 * index + 1
  }

  private static rightChild(index: number): number {
    if (index < 0) throw new Error('Invalid index')
    return 2 * index + 2
  }
}
