import { BST } from './dataStructure/Tree/index'

const bst = new BST<number>()

bst.add(10)
bst.add(11)
bst.add(9)

console.log(bst.contains(11))
