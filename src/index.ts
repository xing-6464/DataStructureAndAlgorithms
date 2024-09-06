import { sortTest } from './test'
import { generateRandomArray, generateArray, swap } from './utils'
import LinkedList from './dataStructure/LinkedList'

const links = new LinkedList<number>()

for (let i = 0; i < 10; i++) {
  links.addFirst(i)
}

links.add(4, 444)
const res = links.contains(10)
console.log(links.toString(), res)
links.remove(4)
console.log(links.getFirst(), links.getLast(), links.getSize(), links.isEmpty())
console.log(links.toString(), res)

links.removeFirst()
console.log(links.toString())

links.removeLast()
console.log(links.toString())
