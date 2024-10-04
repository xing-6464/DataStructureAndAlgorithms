import { MaxHeap, MinHeap } from './dataStructure/Heap'
import { sortTest } from './test'
import { ArrayUtils } from './utils'

let n = 10
const arr = ArrayUtils.generateRandomArray(n)
const minHeap = new MinHeap<number>(arr)
console.log(minHeap)
minHeap.replace(100)
console.log(minHeap)
