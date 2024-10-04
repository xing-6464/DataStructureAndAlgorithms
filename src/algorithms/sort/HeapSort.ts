import { MaxHeap } from '../../dataStructure/Heap'

export class HeapSort {
  private constructor() {}

  static sort<T extends { valueOf(): number | string }>(data: T[]) {
    const maxHeap = new MaxHeap<T>()
    for (const item of data) {
      maxHeap.add(item)
    }
    for (let i = data.length - 1; i >= 0; i--) {
      data[i] = maxHeap.extractMax()
    }
  }

  // 优化版,原地排序
  static sort2<T extends { valueOf(): number | string }>(data: T[]) {
    if (data.length <= 1) return

    for (let i = (data.length - 2) / 2; i >= 0; i--) {
      this.shiftDown(data, i, data.length)
    }

    for (let i = data.length - 1; i > 0; i--) {
      this.swap(data, 0, i)
      this.shiftDown(data, 0, i)
    }
  }

  // 对data[0, size)使其成为最大堆, 搜索 index 位置的元素, 执行 shiftDown 操作
  private static shiftDown<T extends { valueOf(): number | string }>(
    data: T[],
    index: number,
    size: number
  ) {
    while (2 * index + 1 < size) {
      let j = 2 * index + 1
      if (j + 1 < size && data[j + 1] > data[j]) {
        j++ // 找出左右子节点中较大的那个
      }

      if (data[index] >= data[j]) {
        break
      }

      this.swap(data, index, j)
      index = j
    }
  }

  private static swap<T extends { valueOf(): number | string }>(
    data: T[],
    i: number,
    j: number
  ) {
    const temp = data[i]
    data[i] = data[j]
    data[j] = temp
  }
}
