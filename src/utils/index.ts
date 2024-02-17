class Utils {
    static utils = new Utils()
      
    private constructor() {}

    arrayGenerator(n: number) {
        const arr = []

        for (let i = 0; i < n; i++) {
            arr.push(i)
        }

        return arr
    }
}

export default Utils.utils
