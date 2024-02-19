import search from "./algorithms/search"
import utils from "./utils"

const dataSize = [1000000, 10000000]
for (const n of dataSize) {
    const arr = utils.arrayGenerator(n)

    console.time(n.toString())
    for (let i = 0; i < 100; i++) {
        search.linearSearch(arr, n)
    }
    console.timeEnd(n.toString())
}


