import { InsertionSort } from './InsertionSort'

export class MergeSort {
  static sort<T>(
    arr: T[],
    compareFn: (a: T, b: T) => boolean = this.compareFn
  ) {
    this._sort(arr, 0, arr.length - 1, compareFn)
  }

  static sort2<T>(
    arr: T[],
    compareFn: (a: T, b: T) => boolean = this.compareFn
  ) {
    this._sort2(arr, 0, arr.length - 1, compareFn)
  }

  private static _sort2<T>(
    arr: T[],
    l: number,
    r: number,
    compareFn: (a: T, b: T) => boolean
  ) {
    // if (l >= r) return
    if (r - l <= 15) {
      InsertionSort.insertionSort(arr, l, r, compareFn)
      return
    }

    const mid = l + ((r - l) >> 1)
    this._sort2(arr, l, mid, compareFn)
    this._sort2(arr, mid + 1, r, compareFn)

    if (!compareFn(arr[mid], arr[mid + 1])) {
      this.merge(arr, l, mid, r, compareFn)
    }
  }

  private static _sort<T>(
    arr: T[],
    l: number,
    r: number,
    compareFn: (a: T, b: T) => boolean
  ) {
    if (l >= r) return

    const mid = l + ((r - l) >> 1)
    this._sort(arr, l, mid, compareFn)
    this._sort(arr, mid + 1, r, compareFn)

    // 后面数值第一个值大于前面数组第一个值情况下不需要归并
    if (!compareFn?.(arr[mid], arr[mid + 1])) {
      this.merge(arr, l, mid, r, compareFn)
    }
  }

  private static merge<T>(
    arr: T[],
    left: number,
    mid: number,
    right: number,
    compareFn: (a: T, b: T) => boolean
  ) {
    const temp = arr.slice(left, right + 1)

    let i = left,
      j = mid + 1

    for (let k = left; k <= right; k++) {
      if (i > mid) {
        arr[k] = temp[j - left]
        j++
      } else if (j > right) {
        arr[k] = temp[i - left]
        i++
      } else if (compareFn(temp[i - left], temp[j - left])) {
        arr[k] = temp[i - left]
        i++
      } else {
        arr[k] = temp[j - left]
        j++
      }
    }
  }

  private static compareFn<T>(a: T, b: T) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a < b
    }
    if (typeof a === 'string' && typeof b === 'string') {
      return a.toString() < b.toString()
    }
    throw new TypeError('Invalid type for sorting')
  }
}
