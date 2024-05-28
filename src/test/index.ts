import { insertionSort, selectionSort } from '../algorithms/sort'

type SortName = 'insertionSort' | 'selectionSort'

export function sortTest<T>(
  sortName: SortName,
  arr: T[],
  comp?: (a: T, b: T) => boolean
) {
  const now = new Date().getTime()
  switch (sortName) {
    case 'insertionSort':
      insertionSort<T>(arr, comp)
      break
    case 'selectionSort':
      selectionSort<T>(arr)
      break
    default:
      console.log('Invalid sort name')
  }
  const elapsed = new Date().getTime() - now
  if (!isSorted(arr)) {
    console.error(`${sortName} sort failed`)
  }
  console.log(`${sortName} sort n = ${arr.length}, time: ${elapsed / 1000}s`)
}

export function isSorted<T>(arr: T[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }

  return true
}
