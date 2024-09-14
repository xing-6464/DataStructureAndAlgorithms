export class BinarySearch {
  private constructor() {}

  static search<T>(
    data: T[],
    target: T,
    compare: <T>(a: T, target: T) => number = this.compare
  ): number {
    return this._search(data, target, compare, 0, data.length - 1)
  }

  private static _search<T>(
    data: T[],
    target: T,
    compare: (a: T, b: T) => number,
    l: number,
    r: number
  ): number {
    if (l > r) return -1

    const mid = l + Math.floor((r - l) / 2)

    if (compare(data[mid], target) === 0) {
      return mid
    }

    if (compare(data[mid], target) < 0) {
      return this._search(data, target, compare, mid + 1, r)
    }

    return this._search(data, target, compare, l, mid - 1)
  }

  private static compare<T>(a: T, b: T): number {
    if (typeof a === 'number' && typeof b === 'number') {
      return b - a
    }
    if (typeof a === 'string' && typeof b === 'string') {
      return b.localeCompare(a)
    }

    return -1
  }
}
