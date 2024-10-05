import { sortTest } from './test'
import { ArrayUtils } from './utils/index'

let n = 10000000
const arr = ArrayUtils.generateRandomArray(n)
const arr2 = arr.slice()
const arr3 = arr.slice()

sortTest('ShellSort', arr)
sortTest('mergeSort', arr3)
