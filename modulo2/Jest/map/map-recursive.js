const map = (arr = [], func = (item) => item) => {
    return (function mapInternal(arrInternal, counter) {
        if (arrInternal.length === 0)
            return []

        const [head, ...tail] = arrInternal
        return [func(head, counter, arr)].concat(mapInternal(tail, counter +1))
    })(arr, 0)
}


export default map