import { sortTest } from './test'
import { generateRandomArray } from './utils'

const arr = generateRandomArray(100000)
sortTest('mergeSort', arr)
