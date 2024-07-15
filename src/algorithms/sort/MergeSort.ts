export function mergeSort<T>(
  sortArr: T[],
  fn: (a: T, b: T) => number = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b
    }
    throw new TypeError('Invalid type for sorting')
  }
) {
  const merge = (arr: T[], left: number, mid: number, right: number) => {
    const temp = arr.slice(left, right + 1)

    let i = left,
      j = mid + 1

    for (let k = left; k <= right; k++) {
      if (i > mid) {
        arr[k] = temp[j - left]
        j++
      } else if (j > right) {
        arr[k] = temp[i - left]
        i++
      } else if (fn && fn(temp[i - left], temp[j - left]) <= 0) {
        arr[k] = temp[i - left]
        i++
      } else {
        arr[k] = temp[j - left]
        j++
      }
    }
  }
}
