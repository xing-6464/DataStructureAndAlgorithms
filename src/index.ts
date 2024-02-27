import Search from "./algorithms/search"
import Sort from "./algorithms/sort"
import utils from "./utils"

const dataSize = [1000000, 10000000]
for (const n of dataSize) {
    const arr = utils.arrayGenerator(n)

    console.time(n.toString())
    for (let i = 0; i < 100; i++) {
        Search.linearSearch(arr, n)
    }
    console.timeEnd(n.toString())
}

const arr2 = [3, 2, 1]
Sort.selectionSort(arr2)
console.log(arr2)
