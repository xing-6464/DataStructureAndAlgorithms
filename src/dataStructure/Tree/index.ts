export * from './BST'
export * from './BSTSet'
export * from './LinkedListSet'
export * from './LinkedListMap'
export * from './BSTMap'

export interface Set<T> {
  get size(): number
  add(e: T): void
  remove(e: T): void
  contains(e: T): boolean
  isEmpty(): boolean
}

export interface Map<K, V> {
  delete(key: K): V | null
  has(key: K): boolean
  get(key: K): V | null
  set(key: K, value: V): void
  get size(): number
  isEmpty(): boolean
}
