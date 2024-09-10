export class QuickSort {
  static sort<T>(arr: T[]) {
    this.quickSort(arr, 0, arr.length - 1)
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
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }

    ;[arr[l], arr[j]] = [arr[j], arr[l]]

    return j
  }
}
