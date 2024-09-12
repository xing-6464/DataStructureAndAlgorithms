export class ArrayUtils {
  private constructor() {}

  static generateArray(n: number) {
    return Array.from<number, number>({ length: n }, (v, k) => k)
  }

  static generateRandomArray(n: number, item?: number) {
    if (item !== undefined) {
      return Array.from<number, number>({ length: n }, (v, k) => item)
    }

    return Array.from({ length: n }, (v, k) => {
      return (Math.random() * n) | 0
    })
  }

  private static swap<T>(data: T[], i: number, minIndex: number) {
    ;[data[i], data[minIndex]] = [data[minIndex], data[i]]
  }
}
