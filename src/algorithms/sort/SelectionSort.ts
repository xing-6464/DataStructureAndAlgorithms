import { swap } from '../../utils'

type CallBack<T> = (data: T[], j: number, minIndex: number) => boolean

export function selectionSort<T>(data: T[], fn?: CallBack<T>) {
  for (let i = 0; i < data.length; i++) {
    let minIndex = i
    for (let j = i; j < data.length; j++) {
      if (!fn) {
        if (data[j] < data[minIndex]) {
          minIndex = j
        }
      } else {
        if (fn(data, j, minIndex)) {
          minIndex = j
        }
      }
    }

    swap(data, i, minIndex)
  }
}
