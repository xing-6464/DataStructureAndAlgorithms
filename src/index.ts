import { sortTest } from './test'
import { ArrayUtils } from './utils/index'

let n = 5000000
const arr = ArrayUtils.generateRandomArray(n)
const arr2 = arr.slice()

sortTest('ShellSort', arr)
sortTest('ShellSort2', arr2)
