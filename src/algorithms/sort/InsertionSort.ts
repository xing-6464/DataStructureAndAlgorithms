type CompareFn<T> = (prev: T, next: T) => boolean

export class InsertionSort {
  static sort<T>(arr: T[], compareFn?: CompareFn<T>): void {
    this.insertionSort(arr, compareFn)
  }

  private static insertionSort<T>(arr: T[], compareFn?: CompareFn<T>): void {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j - 1 >= 0; j--) {
        const isValue = compareFn
          ? compareFn(arr[j], arr[j - 1])
          : arr[j] < arr[j - 1]
        if (isValue) {
          this.swap(arr, j, j - 1)
        } else {
          break
        }
      }
    }
  }

  private static swap<T>(arr: T[], i: number, j: number): void {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
}
