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
}
