const map = (arr = [], func = (item) => item) => {
    return (function mapInternal(arrInternal, counter) {
        const [head, ...tail] = arrInternal
        return arrInternal.length === 0 ? [] : [
            func(head, counter, arr),
        ...mapInternal(tail, counter +1)
        ]
    })(arr, 0)
}


export default map