type CallBack<T> = (data: T[], j: number, minIndex: number) => boolean

interface SortImpl {
    selectionSort: <T>(data: T[], fn?: CallBack<T>) => void
    // swap: <T>(data: T[], i: number, minIndex: number) => void
}

class Sort implements SortImpl {
    static sort = new Sort()
    
    private constructor() {}

    selectionSort<T>(data: T[], fn?: CallBack<T>) {
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

            this.swap(data, i, minIndex) 
        }
    }


    private swap<T>(data: T[], i: number, minIndex: number) {
        let t = data[i]
        data[i] = data[minIndex]
        data[minIndex] = t
    }
    
}

export default Sort.sort
