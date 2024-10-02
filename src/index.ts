import { MaxHeap } from './dataStructure/Heap'
import { sortTest } from './test'
import { ArrayUtils } from './utils'

function testHeap(testData: number[], isHeapify: boolean) {
  let startTime = new Date().getTime()
  let heap: MaxHeap<number>
  if (isHeapify) {
    heap = new MaxHeap(testData)
  } else {
    heap = new MaxHeap<number>()

    for (const num of testData) {
      heap.add(num)
    }
  }

  let lastTime = new Date().getTime()
  // const arr = Array.from({ length: heap.size }, (_, i) => heap.extractMax())

  // for (let i = 1; i < testData.length; i++) {
  //   if (arr[i] > arr[i - 1]) {
  //     throw new Error('Error')
  //   }
  // }

  return (lastTime - startTime) / 1000
}

let n = 100000000
const testData = ArrayUtils.generateRandomArray(n)

const time1 = testHeap(testData, false)
console.log(`Build heap time: ${time1}s`)

const time2 = testHeap(testData, true)
console.log(`Heapify time: ${time2}s`)
