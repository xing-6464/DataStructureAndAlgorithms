import Search from "./algorithms/search"
import Sort from "./algorithms/sort"
import Student from "./test/student"
import Utils from "./utils"

// const dataSize = [1000000, 10000000]
// for (const n of dataSize) {
//     const arr = utils.arrayGenerator(n)

//     console.time(n.toString())
//     for (let i = 0; i < 100; i++) {
//         Search.linearSearch(arr, n)
//     }
//     console.timeEnd(n.toString())
// }

// const arr2 = [3, 2, 1]
// Sort.selectionSort(arr2)
// console.log(arr2)

const student = [new Student("xing", 100), new Student("guang", 90), new Student("asd", 80)]
console.log(student)
Sort.selectionSort(student, (arr, i, minIndex) => {
    if (arr[i].score < arr[minIndex].score) {
        return true
    }
    return false
})
for (const stu of student) {
    console.log(stu)
}
console.log(student)
