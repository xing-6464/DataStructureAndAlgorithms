type CallFn<T> = (value: T, target: T) => boolean

interface SearchImpl {
    linearSearch: <T>(data: T[], target: T, fn?: CallFn<T>) => number
}

class Search implements SearchImpl {
    static search = new Search()

    linearSearch<T>(data: T[], target: T, fn?: CallFn<T>): number {
        for (const [i, k] of data.entries()) {
        if (!fn) {
            if (k === target) return i
        } else {
            if (fn(k, target)) return i
        }
    }

    return -1
    }
}

export default Search.search
