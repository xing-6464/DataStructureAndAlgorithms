export interface Queue<T> {
  enqueue(item: T): void
  dequeue(): T | undefined | null
  isEmpty(): boolean
  getFront(): T | undefined | null
  get length(): number
}
