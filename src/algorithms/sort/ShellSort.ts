export class ShellSort {
  private constructor() {}

  static sort<T extends { valueOf(): number | string }>(data: T[]) {
    let h = (data.length / 2) | 0

    while (h >= 1) {
      // 对 data[h,n) 进行插入排序
      for (let i = h; i < data.length; i++) {
        const temp = data[i]
        let j = i
        for (; j - h >= 0 && temp < data[j - h]; j -= h) {
          data[j] = data[j - h]
        }

        data[j] = temp
      }

      h = (h / 2) | 0
    }
  }

  static sort2<T extends { valueOf(): number | string }>(data: T[]) {
    let h = 1
    while (h < data.length) h = 3 * h + 1

    while (h >= 1) {
      // 对 data[h,n) 进行插入排序
      for (let i = h; i < data.length; i++) {
        const temp = data[i]
        let j = i
        for (; j - h >= 0 && temp < data[j - h]; j -= h) {
          data[j] = data[j - h]
        }

        data[j] = temp
      }

      h = (h / 3) | 0
    }
  }
}
