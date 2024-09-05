export function generateArray(n: number) {
  return Array.from<number, number>({ length: n }, (v, k) => k)
}

export function generateRandomArray(n: number) {
  return Array.from({ length: n }, (v, k) => {
    return (Math.random() * n) | 0
  })
}

export function swap<T>(data: T[], i: number, minIndex: number) {
  ;[data[i], data[minIndex]] = [data[minIndex], data[i]]
}
