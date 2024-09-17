import { BST } from './dataStructure/Tree/index'

const bst = new BST<number>()
const arr = [5, 4, 3, 8, 6, 2]

for (const num of arr) {
  bst.add(num)
}

bst.postOrder()
console.log()
bst.postOrderNR()
