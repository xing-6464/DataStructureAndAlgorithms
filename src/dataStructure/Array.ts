export default class MyArray<T> {
  private _data: number[]
  private _size: number;
  [index: number]: number

  constructor(capacity: number = 10) {
    this._data = new Array(capacity)
    this._size = 0
  }

  get length(): number {
    return this._size
  }

  get capacity(): number {
    return this._data.length
  }

  push(e: number) {
    this.insert(this._size, e)
  }

  unshift(e: number) {
    this.insert(0, e)
  }

  insert(index: number, e: number) {
    if (this._size === this._data.length) {
      throw new ReferenceError('add failed, array is full')
    }
    if (index < 0 || index > this._size) {
      throw new RangeError('add failed, index out of range')
    }
    for (let i = this._size - 1; i >= index; i--) {
      this._data[i + 1] = this._data[i]
    }
    this._data[index] = e
    this._size++
  }

  isEmpty(): boolean {
    return this._size === 0
  }

  toString() {
    let res = ''
    res += `Array: length = ${this._size}, capacity = ${this._data.length}\n`
    res += `[`
    for (let i = 0; i < this._size; i++) {
      res += `${this._data[i]}`
      if (i !== this._size - 1) {
        res += `, `
      }
    }
    res += `]`
    return res
  }

  get(index: number) {
    if (index < 0 || index >= this._size) {
      throw new RangeError('get failed, index out of range')
    }
    return this._data[index]
  }

  set(index: number, e: number) {
    if (index < 0 || index >= this._size) {
      throw new RangeError('set failed, index out of range')
    }
    this._data[index] = e
  }

  contains(e: number) {
    for (let i = 0; i < this._size; i++) {
      if (this._data[i] === e) {
        return true
      }
    }
    return false
  }

  // 存在返回索引，不存在返回-1
  findIndex(e: number) {
    for (let i = 0; i < this._size; i++) {
      if (this._data[i] === e) {
        return i
      }
    }
    return -1
  }

  // 存在返回true，不存在返回false
  find(e: number) {
    for (let i = 0; i < this._size; i++) {
      if (this._data[i] === e) {
        return true
      }
    }

    return false
  }

  // 根据索引删除元素
  remove(index: number) {
    if (index < 0 || index >= this._size) {
      throw new RangeError('remove failed, index out of range')
    }

    let ret = this._data[index]
    for (let i = index + 1; i < this._size; i++) {
      this._data[i - 1] = this._data[i]
    }
    this._size--
    return ret
  }

  // 根据元素删除元素
  removeElement(e: number) {
    let index = this.findIndex(e)
    if (index !== -1) {
      this.remove(index)
      return true
    }
    return false
  }

  pop() {
    return this.remove(this._size - 1)
  }

  shift() {
    return this.remove(0)
  }
}
