import { sortTest } from './test'
import { generateArray, generateRandomArray } from './utils'

const arr = generateRandomArray(1000000)
const arr1 = arr.slice()
const arr2 = arr.slice()

sortTest('mergeSort', arr)
sortTest('mergeSortBu', arr1)
sortTest('quickSort', arr2)
