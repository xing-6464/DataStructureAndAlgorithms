class MyArray<T> {
  private _data: number[]
  private _size: number

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
}
