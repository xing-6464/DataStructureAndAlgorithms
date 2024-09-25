import { MaxHeap } from './dataStructure/Heap'

let n = 100

const heap = new MaxHeap<number>()

for (let i = 0; i < 10; i++) {
  heap.add(Math.floor(Math.random() * 100))
}

for (let i = 0; i < 10; i++) {
  console.log(heap.extractMax())
}

// const arr = [] as number[]
// for (let i = 0; i < n; i++) {
//   arr.push(heap.extractMax())
// }

// for (let i = 1; i < n; i++) {
//   if (arr[i] > arr[i - 1]) {
//     throw new Error('Heap property is violated')
//   }
// }

console.log('Heap property is satisfied')
console.log(heap)
