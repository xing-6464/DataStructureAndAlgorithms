type CompareFn<T> = (prev: T, next: T) => boolean

export class InsertionSort {
  static sort<T>(arr: T[], compareFn: CompareFn<T> = this.compareFn): void {
    this._insertionSort(arr, compareFn)
  }

  private static _insertionSort<T>(arr: T[], compareFn: CompareFn<T>): void {
    for (let i = 0; i < arr.length; i++) {
      let t = arr[i],
        j = 0
      for (j = i; j - 1 >= 0 && compareFn(t, arr[j - 1]); j--) {
        arr[j] = arr[j - 1]
      }
      arr[j] = t
    }
  }

  public static insertionSort<T>(
    arr: T[],
    l: number,
    r: number,
    compareFn: CompareFn<T> = this.compareFn
  ) {
    for (let i = l; i <= r; i++) {
      let t = arr[i]
      let j = 0
      for (j = i; j - 1 >= l && compareFn(t, arr[j - 1]); j--) {
        arr[j] = arr[j - 1]
      }
      arr[j] = t
    }
  }

  private static compareFn<T = number>(a: T, b: T): boolean {
    return a < b
  }
}
