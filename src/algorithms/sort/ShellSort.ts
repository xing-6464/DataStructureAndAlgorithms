export class ShellSort {
  private constructor() {}

  static sort<T extends { valueOf(): number | string }>(data: T[]) {
    let h = (data.length / 2) | 0

    while (h >= 1) {
      for (let start = 0; start < h; start++) {
        // 对 data[start, start + h, start + 2h,..., start + kh] 进行插入排序
        for (let i = start + h; i < data.length; i += h) {
          const temp = data[i]
          let j = i
          for (; j - h >= 0 && temp < data[j - h]; j -= h) {
            data[j] = data[j - h]
          }

          data[j] = temp
        }
      }

      h = (h / 2) | 0
    }
  }
}
