class MyArray<T> {
  private _data: number[]
  private _size: number

  constructor(capacity: number = 10) {
    this._data = new Array(capacity)
    this._size = 0
  }

  get size(): number {
    return this._size
  }

  get capacity(): number {
    return this._data.length
  }

  isEmpty(): boolean {
    return this._size === 0
  }
}
