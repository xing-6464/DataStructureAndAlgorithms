type CallBack = <T>(data: T[], j: number, minIndex: number) => boolean

interface Sort {
    selectionSort: <T>(data: T[], fn?: CallBack) => void
}

function swap<T>(data: T[], i: number, minIndex: number) {
    let t = data[i]
    data[i] = data[minIndex]
    data[minIndex] = t
}

const Sort: Sort = {
    selectionSort: <T>(data: T[], fn?: CallBack) => {
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
}

export default Sort
