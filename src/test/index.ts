import { InsertionSort, MergeSort, SelectionSort } from '../algorithms/sort'

type SortName = 'insertionSort' | 'selectionSort' | 'mergeSort' | 'mergeSort2'

export function sortTest<T>(
  sortName: SortName,
  arr: T[],
  comp?: (a: T, b: T) => boolean
) {
  const now = new Date().getTime()
  switch (sortName) {
    case 'insertionSort':
      InsertionSort.sort(arr, comp)
      break
    case 'selectionSort':
      SelectionSort.sort(arr)
      break
    case 'mergeSort':
      MergeSort.sort(arr, comp)
      break
    case 'mergeSort2':
      MergeSort.sort2(arr, comp)
      break
    default:
      console.log('Invalid sort name')
  }
  const elapsed = new Date().getTime() - now
  if (!isSorted(arr)) {
    console.error(`${sortName} sort failed`)
    return
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
