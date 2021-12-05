 
const filter = (arr, func) => {
    let newArray = []
    for(let i=0; i < arr.length; i++ ) {
        if(func(arr[i], i, arr)) {
            newArray.push(arr[i])
        }
    }
    return newArray 
}
export default filter 