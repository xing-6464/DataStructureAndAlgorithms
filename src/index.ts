import SegmentTree from './dataStructure/Tree/SegmentTree'

const nums = [-2, 0, 3, -5, 2, -1]

const segTree = new SegmentTree(nums, (a, b) => a + b)

const sum = segTree.query(2, 5)
console.log(`${sum}`)
