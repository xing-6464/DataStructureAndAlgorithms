import { LinkedListSet } from './dataStructure/Tree/LinkedListSet'

const linkedSet = new LinkedListSet<number>()

for (let i = 0; i < 10; i++) {
  linkedSet.add(i)
}

console.log(linkedSet.size)
linkedSet.remove(5)

console.log(linkedSet.size)
