import { MaxHeap } from '../Heap/MaxHeap'
import { Queue } from './type'

export class PriorityQueue<T extends { valueOf(): number | string }>
  implements Queue<T>
{
  constructor(private maxHeap: MaxHeap<T> = new MaxHeap()) {}

  enqueue(item: T): void {
    this.maxHeap.add(item)
  }

  dequeue(): T | null | undefined {
    try {
      return this.maxHeap.extractMax()
    } catch (e) {
      return undefined
    }
  }

  isEmpty(): boolean {
    return this.maxHeap.isEmpty()
  }

  getFront(): T | null | undefined {
    return this.maxHeap.findMax()
  }

  get length(): number {
    return this.maxHeap.size
  }
}
