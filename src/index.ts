import { BST } from './dataStructure/Tree/index'

const bst = new BST<number>()
const arr = [5, 3, 4, 6, 8, 2]

for (const num of arr) {
  bst.add(num)
}

bst.levelOrder()
