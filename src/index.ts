import { BST } from './dataStructure/Tree/index'

const bst = new BST<number>()
const arr = [5, 3, 4, 6, 8, 2, 900, 23, 124, 345, 532]

for (const num of arr) {
  bst.add(num)
}

bst.levelOrder()
console.log(bst.removeMin())
console.log(bst.minimum())
console.log(bst.removeMax())
console.log(bst.contains(900))
