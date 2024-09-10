import { sortTest } from './test'
import { generateArray, generateRandomArray } from './utils'

const arr = generateRandomArray(1000000)
const arr1 = arr.slice()
const arr2 = generateArray(1000000)

// sortTest('selectionSort', arr)
// sortTest('insertionSort', arr1)
sortTest('mergeSort', arr)
sortTest('mergeSortBu', arr1)

sortTest('mergeSort', arr2)
sortTest('mergeSortBu', arr2)
