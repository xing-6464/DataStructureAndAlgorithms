import { sortTest } from './test'
import { generateRandomArray, generateArray, swap } from './utils'
import LinkedList from './dataStructure/LinkedList'

const links = new LinkedList<number>()

links.addFirst(1)

console.log(links.toString())
