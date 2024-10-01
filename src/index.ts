import { sortTest } from './test'
import { ArrayUtils } from './utils'

let n = 1000000

const arr = ArrayUtils.generateRandomArray(n)
const arr2 = arr.slice()
const arr3 = arr.slice()
const arr4 = arr.slice()

sortTest('mergeSortBu', arr)
sortTest('quickSort2ways', arr2)
sortTest('quickSort3ways', arr3)
sortTest('heapSort', arr4)
