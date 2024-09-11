import { InsertionSort } from './InsertionSort'

export class QuickSort {
  static sort<T>(arr: T[]) {
    // this.quickSort(arr, 0, arr.length - 1)
    this.quickSort2(arr, 0, arr.length - 1)
  }

  static sort2<T>(arr: T[]) {
    this.quickSort2(arr, 0, arr.length - 1)
  }

  private static quickSort2<T>(arr: T[], l: number, r: number) {
    if (r - l <= 15) {
      InsertionSort.insertionSort(arr, l, r)
      return
    }

    const i = this.partition(arr, l, r)

    this.quickSort(arr, l, i - 1)
    this.quickSort(arr, i + 1, r)
  }

  private static quickSort<T>(arr: T[], l: number, r: number) {
    if (l >= r) return

    const i = this.partition(arr, l, r)

    this.quickSort(arr, l, i - 1)
    this.quickSort(arr, i + 1, r)
  }

  private static partition<T>(arr: T[], l: number, r: number): number {
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
