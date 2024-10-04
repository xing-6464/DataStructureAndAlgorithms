import {
  InsertionSort,
  MergeSort,
  QuickSort,
  SelectionSort,
  HeapSort,
  BubbleSort,
  ShellSort,
} from '../algorithms/sort'
import { Set } from '../dataStructure/Tree'

type SortName =
  | 'insertionSort'
  | 'selectionSort'
  | 'mergeSort'
  | 'mergeSortBu'
  | 'quickSort'
  | 'quickSort2ways'
  | 'quickSort3ways'
  | 'heapSort'
  | 'heapSort2'
  | 'bubbleSort'
  | 'bubbleSort2'
  | 'bubbleSort3'
  | 'ShellSort'

export function sortTest<T extends { valueOf(): number | string }>(
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
    case 'mergeSortBu':
      MergeSort.sortBu(arr, comp)
      break
    case 'quickSort':
      QuickSort.sort(arr)
      break
    case 'quickSort2ways':
      QuickSort.sort2ways(arr)
      break
    case 'quickSort3ways':
      QuickSort.sort3ways(arr)
      break
    case 'heapSort':
      HeapSort.sort(arr)
      break
    case 'heapSort2':
      HeapSort.sort2(arr)
      break
    case 'bubbleSort':
      BubbleSort.sort(arr)
      break
    case 'bubbleSort2':
      BubbleSort.sort2(arr)
      break
    case 'bubbleSort3':
      BubbleSort.sort3(arr)
      break
    case 'ShellSort':
      ShellSort.sort(arr)
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

export function testSet<T>(set: Set<T>, str: string) {}
