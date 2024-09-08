import { sortTest } from './test'
import { generateArray, generateRandomArray } from './utils'

const arr = generateRandomArray(100000)
const arr1 = arr.slice()
const arr1_1 = arr1.slice()
const arr2 = generateArray(1000000)
const arr3 = arr2.slice()

// sortTest('selectionSort', arr)
// sortTest('insertionSort', arr1)
sortTest('mergeSort', arr)
sortTest('mergeSort2', arr1)

sortTest('mergeSort', arr2)
sortTest('mergeSort2', arr3)
