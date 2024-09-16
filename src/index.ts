import { sortTest } from './test'
import { ArrayUtils } from './utils'
import { BinarySearch } from './algorithms/search/BinarySearch'

const arr = [1, 1, 3, 3, 5, 5]
for (let i = 0; i <= 6; i++) {
  console.log(BinarySearch.lower_ceil(arr, i))
}
