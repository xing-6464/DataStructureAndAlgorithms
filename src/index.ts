import { sortTest } from './test'
import { generateRandomArray } from './utils'

const dataSize = [10000, 100000]
for (const size of dataSize) {
  const arr = generateRandomArray(size)
  sortTest('insertionSort', arr)
}
