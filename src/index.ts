import { sortTest } from './test'
import { generateRandomArray } from './utils'

const arr = generateRandomArray(10000)
sortTest('selectionSort', arr)
