export class BubbleSort {
  private constructor() {}

  static sort<T extends { valueOf(): number | string }>(data: T[]) {
    for (let i = 0; i + 1 < data.length; i++) {
      // arr[n - i, n)排序好
      // 通关冒泡排序 arr[n - i - 1]位置放上合适的元素
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].valueOf() > data[j + 1].valueOf()) {
          ;[data[j], data[j + 1]] = [data[j + 1], data[j]]
        }
      }
    }
  }

  // 优化一版
  static sort2<T extends { valueOf(): number | string }>(data: T[]) {
    for (let i = 0; i + 1 < data.length; i++) {
      // arr[n - i, n)排序好
      // 通关冒泡排序 arr[n - i - 1]位置放上合适的元素
      let isSwapped = false
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].valueOf() > data[j + 1].valueOf()) {
          ;[data[j], data[j + 1]] = [data[j + 1], data[j]]
          isSwapped = true
        }
      }

      if (!isSwapped) {
        break
      }
    }
  }

  // 优化二版
  static sort3<T extends { valueOf(): number | string }>(data: T[]) {
    for (let i = 0; i < data.length - 1; ) {
      let lastSwappedIndex = 0
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j].valueOf() > data[j + 1].valueOf()) {
          ;[data[j], data[j + 1]] = [data[j + 1], data[j]]
          lastSwappedIndex = j + 1
        }
      }

      i = data.length - lastSwappedIndex
    }
  }
}
