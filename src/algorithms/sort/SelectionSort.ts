type CallBack<T> = (data: T[], j: number, minIndex: number) => boolean

export class SelectionSort {
  static sort<T>(data: T[], fn?: CallBack<T>) {
    this.selectionSort(data, fn)
  }
  private static selectionSort<T>(data: T[], fn?: CallBack<T>) {
    for (let i = 0; i < data.length; i++) {
      let minIndex = i
      for (let j = i + 1; j < data.length; j++) {
        if (!fn) {
          if (data[j] < data[minIndex]) {
            minIndex = j
          }
        } else {
          if (fn(data, j, minIndex)) {
            minIndex = j
          }
        }
      }
      this.swap(data, i, minIndex)
    }
  }

  private static swap<T>(data: T[], i: number, j: number) {
    const temp = data[i]
    data[i] = data[j]
    data[j] = temp
  }
}
