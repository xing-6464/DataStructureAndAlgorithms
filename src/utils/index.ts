export function generateArray(n: number) {
  const arr: number[] = []

  for (let i = 0; i < n; i++) {
    arr.push(i)
  }

  return arr
}

export function generateRandomArray(n: number) {
  const arr: number[] = []

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * n))
  }

  return arr
}

export function swap<T>(data: T[], i: number, minIndex: number) {
  let t = data[i]
  data[i] = data[minIndex]
  data[minIndex] = t
}
