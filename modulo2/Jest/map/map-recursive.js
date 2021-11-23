const map = (arr = [], func = (item) => item) => {
    let counter = 0
    const mapInternal = (arrInternal) => {
        if (arr.length === 0) {
            return []
        }

        console.log(counter)
        const [head, ...tail] = arrInternal
        return [func(head, counter++)].concat(mapInternal(tail, func))
    }
    return mapInternal(arrInternal)
}


export default map