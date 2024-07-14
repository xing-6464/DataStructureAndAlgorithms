import MyArray from './dataStructure/Array'

const arr = new MyArray(20)
for (let i = 0; i < 10; i++) {
  arr.push(i)
}

console.log(arr.toString()) // output: 0,1,2,3,4,5,6,7,8,9
arr.insert(1, 100)
console.log(arr.toString())

arr.unshift(-1)

console.log(arr.toString())

console.log(arr.get(1))

arr.remove(2)
console.log(arr.toString())

arr.removeElement(2)
console.log(arr.toString())
arr.pop()
arr.shift()
console.log(arr.toString())
console.log(arr.length)
