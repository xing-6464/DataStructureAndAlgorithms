export function mergeSort<T>(
  sortArr: T[],
  fn: (a: T, b: T) => boolean = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      if (a < b) return false
      return true
    }
    throw new TypeError('Invalid type for sorting')
  }
) {
  const sort = (arr: T[], l: number, r: number) => {
    if (l >= r) return

    const mid = (l + r) >> 1
    sort(arr, l, mid)
    sort(arr, mid + 1, r)
    merge(arr, l, mid, r)
  }
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
      } else if (!fn(temp[i - left], temp[j - left])) {
        arr[k] = temp[i - left]
        i++
      } else {
        arr[k] = temp[j - left]
        j++
      }
    }
  }

  sort(sortArr, 0, sortArr.length - 1)
}
