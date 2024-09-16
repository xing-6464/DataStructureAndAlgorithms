import { BST } from './dataStructure/Tree/index'

const bst = new BST<number>()
const arr = [5, 3, 2, 6, 7]

for (const num of arr) {
  bst.add(num)
}
bst.preOrder()

console.log(`${bst}`)
