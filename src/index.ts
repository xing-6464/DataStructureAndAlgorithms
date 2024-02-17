import linearSearch from "./algorithms/linearSearch"
import utils from "./utils"

const dataSize = [1000000, 10000000]
for (const n of dataSize) {
    const arr = utils.arrayGenerator(n)

    console.time(n.toString())
    for (let i = 0; i < 100; i++) {
        linearSearch(arr, n)
    }
    console.timeEnd(n.toString())
}


