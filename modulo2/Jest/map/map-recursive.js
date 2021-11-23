const map = (arr = [], func = (item) => item) => {
    let counter = 0
    return (function mapInternal(arrInternal) {
        if (arrInternal.length === 0)
            return []

        const [head, ...tail] = arrInternal
        return [func(head, counter++, arr)].concat(mapInternal(tail, func))
    })(arr)
}


export default map