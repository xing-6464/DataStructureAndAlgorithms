import { sortTest } from './test'
import { ArrayUtils } from './utils/index'
import SegmentTree, { Merger } from './dataStructure/Tree/SegmentTree'

const nums = [-2, 0, 3, -5, 2, -1]

const segTree = new SegmentTree(nums, (a, b) => a + b)

console.log(`${segTree}`)
