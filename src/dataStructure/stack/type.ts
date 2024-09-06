export interface Stack<T> {
  push(item: T): void
  pop(): T | undefined | null
  peek(): T | undefined | null
  isEmpty(): boolean
  get length(): number
}
