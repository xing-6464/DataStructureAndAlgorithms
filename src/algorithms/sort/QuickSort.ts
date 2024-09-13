import { InsertionSort } from './InsertionSort'

export class QuickSort {
  static sort<T>(arr: T[]) {
    // this.quickSort(arr, 0, arr.length - 1)
    this.quickSort2(arr, 0, arr.length - 1)
  }

  // 优化一: 快速排序中加入插入排序
  static sort2<T>(arr: T[]) {
    this.quickSort2(arr, 0, arr.length - 1)
  }

  // 优化二: 双路快速排序
  static sort2ways<T>(arr: T[]) {
    this.quickSort2ways(arr, 0, arr.length - 1)
  }

  // 优化三: 三路快速排序
  static sort3ways<T>(arr: T[]) {
    this.quickSort3ways(arr, 0, arr.length - 1)
  }

  // 优化三: 三路快速排序
  private static quickSort3ways<T>(arr: T[], l: number, r: number) {
    if (r - l <= 15) {
      InsertionSort.insertionSort(arr, l, r)
      return
    }

    const { lt, gt } = this.partition3(arr, l, r)
    this.quickSort3ways(arr, l, lt - 1)
    this.quickSort3ways(arr, gt, r)
  }

  // 优化二:双路快速排序
  private static quickSort2ways<T>(arr: T[], l: number, r: number) {
    if (r - l <= 15) {
      InsertionSort.insertionSort(arr, l, r)
      return
    }

    const p = this.partition2(arr, l, r)
    this.quickSort2ways(arr, l, p - 1)
    this.quickSort2ways(arr, p + 1, r)
  }

  // 优化三: 三路快速排序
  private static partition3<T>(arr: T[], l: number, r: number) {
    const p = l + ((Math.random() * (r - l + 1)) | 0)
    this.swap(arr, l, p)

    // arr[l+1...lt] < v; arr[gt...r] > v; arr[lt+1...i-1] == v
    let lt = l,
      i = l + 1,
      gt = r + 1
    while (i < gt) {
      if (arr[i] < arr[l]) {
        lt++
        this.swap(arr, lt, i)
        i++
      } else if (arr[i] > arr[l]) {
        gt--
        this.swap(arr, i, gt)
      } else {
        // arr[i] == arr[l]
        i++
      }
    }

    // arr[l...lt-1] < v; arr[gt...r] > v; arr[lt...i-1] == v
    this.swap(arr, l, lt)

    return {
      lt,
      gt,
    }
  }

  // 优化第二个版本: 双路快速排序
  private static partition2<T>(arr: T[], l: number, r: number): number {
    const p = (Math.random() * (r - l + 1) + l) | 0
    this.swap(arr, l, p)

    // arr[l+1...i-1] <= v; arr[i+1...j-1] >= v
    let i = l + 1,
      j = r
    while (true) {
      while (i <= j && arr[i] < arr[l]) {
        i++
      }
      while (j >= i && arr[j] > arr[l]) {
        j--
      }

      if (i >= j) break

      this.swap(arr, i, j)
      i++
      j--
    }

    this.swap(arr, l, j)
    return j
  }

  // 优化第一个版本
  private static quickSort2<T>(arr: T[], l: number, r: number) {
    if (r - l <= 15) {
      InsertionSort.insertionSort(arr, l, r)
      return
    }

    const i = this.partition(arr, l, r)

    this.quickSort(arr, l, i - 1)
    this.quickSort(arr, i + 1, r)
  }

  // 基础版本
  private static quickSort<T>(arr: T[], l: number, r: number) {
    if (l >= r) return

    const i = this.partition(arr, l, r)

    this.quickSort(arr, l, i - 1)
    this.quickSort(arr, i + 1, r)
  }

  // 解决快速排序的排好序的bug
  private static partition<T>(arr: T[], l: number, r: number): number {
    let p = (Math.random() * (r - l + 1) + l) | 0
    this.swap(arr, l, p)

    let j = l
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < arr[l]) {
        j += 1
        this.swap(arr, i, j)
      }
    }

    this.swap(arr, l, j)

    return j
  }

  private static swap<T>(arr: T[], i: number, j: number) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  private constructor() {}
}
