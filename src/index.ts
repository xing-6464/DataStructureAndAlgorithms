import { sortTest } from './test'
import { ArrayUtils } from './utils'

const arr = ArrayUtils.generateRandomArray(1000000)
const arr1 = arr.slice()
const arr2 = arr.slice()

const arr3 = ArrayUtils.generateArray(1000000)
const arr4 = arr3.slice()
const arr5 = arr3.slice()
const arr6 = ArrayUtils.generateRandomArray(100000, 1)

sortTest('mergeSort', arr)
sortTest('quickSort2ways', arr1)
sortTest('quickSort', arr2)

sortTest('mergeSort', arr3)
sortTest('quickSort2ways', arr4)
sortTest('quickSort', arr5)

sortTest('quickSort2ways', arr6)
