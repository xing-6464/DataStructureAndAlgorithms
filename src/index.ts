import linearSearch from "./algorithms/linearSearch"
import _ from "lodash"

class student {
    name: string

    constructor(_name: string) {
        this.name = _name
    }
}

const data = [2, 3, 41, 23, 214]
let target = 3

let res = linearSearch(data, target)

console.log(res)

const students = [
    new student("xing"),
    new student("guang")
]

const student1 = new student("xing")


res = linearSearch(students, student1, (k, target) => {
    return k.name === target.name
})
console.log(res)

