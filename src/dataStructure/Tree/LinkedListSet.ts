import LinkedList from '../LinkedList'

interface Set<T> {
  get size(): number
  add(e: T): void
  remove(e: T): void
  contains(e: T): boolean
  isEmpty(): boolean
}

export class LinkedListSet<T extends { valueOf(): number | string }>
  implements Set<T>
{
  private list: LinkedList<T>

  constructor() {
    this.list = new LinkedList()
  }

  remove(e: T): void {
    this.list.removeElement(e)
  }

  get size(): number {
    return this.list.getSize()
  }

  isEmpty(): boolean {
    return this.list.isEmpty()
  }

  contains(e: T): boolean {
    return this.list.contains(e)
  }

  add(e: T): void {
    if (!this.list.contains(e)) {
      this.list.addFirst(e)
    }
    return
  }
}
