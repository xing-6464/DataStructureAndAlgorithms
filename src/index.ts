import { BST } from './dataStructure/Tree/index'

const bst = new BST<number>()

for (let i = 0; i < 10; i++) {
  bst.add(i)
}

console.log(bst.toString())
bst.remove(8)
console.log(bst.toString())
