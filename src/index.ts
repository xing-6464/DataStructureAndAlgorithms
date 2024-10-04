import { MaxHeap } from './dataStructure/Heap'
import { sortTest } from './test'
import { ArrayUtils } from './utils'

let n = 1000000

const arr = ArrayUtils.generateRandomArray(n)
const arr2 = arr.slice()

sortTest('heapSort', arr)
sortTest('heapSort2', arr2)
