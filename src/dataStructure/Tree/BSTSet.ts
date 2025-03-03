import { BST } from './BST'
import type { Set } from '.'

export class BSTSet<T extends { valueOf(): number | string }>
  implements Set<T>
{
  private bst: BST<T>

  constructor() {
    this.bst = new BST()
  }

  get size(): number {
    return this.bst.length
  }

  isEmpty(): boolean {
    return this.bst.isEmpty()
  }

  add(e: T): void {
    this.bst.add(e)
  }

  contains(e: T): boolean {
    return this.bst.contains(e)
  }

  remove(e: T): void {
    this.bst.remove(e)
  }
}
