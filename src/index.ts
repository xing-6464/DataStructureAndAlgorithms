import { sortTest } from './test'
import { ArrayUtils } from './utils/index'

const arr = ArrayUtils.generateRandomArray(50000)
const arr2 = arr.slice()
const arr3 = arr.slice()

sortTest('bubbleSort', arr)
sortTest('bubbleSort2', arr2)
sortTest('bubbleSort3', arr3)

const arr4 = ArrayUtils.generateArray(50000)

sortTest('bubbleSort', arr4)
sortTest('bubbleSort2', arr4)
sortTest('bubbleSort3', arr4)
