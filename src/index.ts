import { sortTest } from './test'
import { generateRandomArray } from './utils'
const n = [1000000, 10000000]

for (const i of n) {
  sortTest('mergeSort', generateRandomArray(i))
}
