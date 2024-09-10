import { InsertionSort } from './InsertionSort'

export class MergeSort {
  static sort<T>(
    arr: T[],
    compareFn: (a: T, b: T) => boolean = this.compareFn
  ) {
    this._sort(arr, 0, arr.length - 1, compareFn)
  }

  // 归并排序自底向上
  static sortBu<T>(
    arr: T[],
    compareFn: (a: T, b: T) => boolean = this.compareFn
  ) {
    let n = arr.length

    for (let i = 0; i < n; i += 16) {
      InsertionSort.insertionSort(arr, i, Math.min(i + 15, n - 1), compareFn)
    }

    for (let sz = 16; sz < n; sz += sz) {
      // 合并[i, i+sz-1]和[i+sz, min(i+sz+sz-1, n-1)]
      for (let i = 0; i + sz < n; i += sz + sz) {
        if (!compareFn(arr[i + sz - 1], arr[i + sz])) {
          const minLastIndex = Math.min(i + sz + sz - 1, n - 1)
          // if (minLastIndex - i + sz - 1 <= 15) {
          //   InsertionSort.insertionSort(arr, i, minLastIndex, compareFn)
          //   continue
          // }

          this.merge(arr, i, i + sz - 1, minLastIndex, compareFn)
        }
      }
    }
  }

  private static _sort<T>(
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
