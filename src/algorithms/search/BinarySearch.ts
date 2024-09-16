export class BinarySearch {
  private constructor() {}

  // 递归
  static searchR<T>(
    data: T[],
    target: T,
    compare: <T>(a: T, target: T) => number = this.compare
  ): number {
    return this._searchR(data, target, compare, 0, data.length - 1)
  }

  // 非递归
  static search<T>(
    data: T[],
    target: T,
    compare: <T>(a: T, target: T) => number = this.compare
  ): number {
    let l = 0
    let r = data.length - 1

    while (l <= r) {
      const i = l + Math.floor((r - l) / 2)

      if (compare(data[i], target) === 0) {
        return i
      }
      if (compare(data[i], target) < 0) {
        l = i + 1
      } else {
        r = i - 1
      }
    }
    return -1
  }

  // > target 的最小值
  static upper<T>(
    data: T[],
    target: T,
    compare: (a: T, b: T) => number = this.compare
  ) {
    let l = 0,
      r = data.length

    // 在 [l, r] 范围内查找 target 的最小值
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2)

      if (compare(data[mid], target) >= 0) {
        l = mid + 1
      } else {
        r = mid
      }
    }

    return l
  }

  // target存在
  // > target 的最大值
  // == target 的最大索引
  static upper_ceil<T>(
    data: T[],
    target: T,
    compare: (a: T, b: T) => number = this.compare
  ) {
    const u = this.upper(data, target, compare)
    if (u - 1 >= 0 && compare(data[u - 1], target) === 0) {
      return u - 1
    }
    return u
  }

  // >= target 的最小索引
  static lower_ceil<T>(
    data: T[],
    target: T,
    compare: (a: T, b: T) => number = this.compare
  ) {
    let l = 0,
      r = data.length

    // 在 [l, r] 范围内查找 target 的最小值
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2)

      // 在 upper 中，这里是 compare(data[mid], target) <= 0
      // 但是，对于 lower_ceil 来说，在 data[mid] == target 的时候，有可能是解
      // 所以在等于的情况下，不能排除掉 data[mid] 的值。在等于的情况下，应该归入下面的 else 中做处理
      // 也就是，data[mid] == target 的时候可能是解，也可能有更小的解在左边，应该去更新右边界
      if (compare(data[mid], target) > 0) {
        l = mid + 1
      } else {
        r = mid
      }
    }

    return l
  }

  // 递归
  private static _searchR<T>(
    data: T[],
    target: T,
    compare: (a: T, b: T) => number,
    l: number,
    r: number
  ): number {
    if (l > r) return -1

    const mid = l + Math.floor((r - l) / 2)

    if (compare(data[mid], target) === 0) {
      return mid
    }

    if (compare(data[mid], target) < 0) {
      return this._searchR(data, target, compare, mid + 1, r)
    }

    return this._searchR(data, target, compare, l, mid - 1)
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
