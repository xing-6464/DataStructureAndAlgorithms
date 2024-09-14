type CallFn<T> = (value: T, target: T) => number

export class LinearSearch {
  private constructor() {}

  static search<T>(data: T[], target: T, fn: CallFn<T> = this.compare): number {
    for (const [i, k] of data.entries()) {
      if (fn(k, target) !== 0) {
        continue
      }

      return i
    }

    return -1
  }

  private static compare<T>(a: T, b: T): number {
    if (typeof a === 'number' && typeof b === 'number') {
      return b - a
    }
    if (typeof a === 'string' && typeof b === 'string') {
      return b.localeCompare(a)
    }
    return -1
  }
}
