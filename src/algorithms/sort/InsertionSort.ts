import { swap } from '../../utils'

type CompareFn<T> = (prev: T, next: T) => boolean

export function insertionSort<T>(arr: T[], compareFn?: CompareFn<T>): void {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j - 1 >= 0; j--) {
      const isValue = compareFn
        ? compareFn(arr[j], arr[j - 1])
        : arr[j] < arr[j - 1]
      if (isValue) {
        swap(arr, j, j - 1)
      } else {
        break
      }
    }
  }
}
