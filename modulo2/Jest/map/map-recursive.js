let counter = 0
const map = (arr = [], func = (item) => item) => {
    if(arr.lengh === 0) {
        counter=0
        return []
    }

    console.log(counter)
    const [head, ...tail] = arr
    return [func(head, counter++)].concat(map(tail,func))
  }
  
  export default map 