import { sortTest } from './test'
import { ArrayUtils } from './utils'

const n = 1000000
const arr = ArrayUtils.generateRandomArray(n)
const arr1 = arr.slice()
const arr2 = arr.slice()
const arr2_1 = arr.slice()

const arr3 = ArrayUtils.generateArray(n)
const arr4 = arr3.slice()
const arr5 = arr3.slice()
const arr5_1 = arr3.slice()

const arr6 = ArrayUtils.generateRandomArray(n, 1)
const arr7 = arr6.slice()

sortTest('mergeSort', arr)
sortTest('quickSort2ways', arr1)
sortTest('quickSort', arr2)
sortTest('quickSort3ways', arr2_1)

sortTest('mergeSort', arr3)
sortTest('quickSort2ways', arr4)
sortTest('quickSort', arr5)
sortTest('quickSort3ways', arr5_1)

sortTest('quickSort2ways', arr6)
sortTest('quickSort3ways', arr7)
