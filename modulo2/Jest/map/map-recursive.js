const map = (arr = [], func = (item) => item) => {
    let counter = 0
    const mapInternal = (arrInternal) => {
        if (arrInternal.length === 0) {
            return []
        }

        const [head, ...tail] = arrInternal
        return [func(head, counter++)].concat(mapInternal(tail, func))
    }
    return mapInternal(arr)
}


export default map