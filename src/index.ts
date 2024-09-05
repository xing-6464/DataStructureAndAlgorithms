import { sortTest } from './test'
import { generateRandomArray, generateArray, swap } from './utils'
import LinkedList from './dataStructure/LinkedList'

const links = new LinkedList()

links.addFirst(1)
links.addFirst(2)
links.addFirst(3)

console.log(links.toString())
