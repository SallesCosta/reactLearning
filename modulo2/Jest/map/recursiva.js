// função que vai somar todos os itens de um array
const sum = arr => {
    if(arr.length ===0 )
    return 0
    return arr[0] + sum(arr.slice(1))
}
console.log(sum([1, 2, 3]))


// vai fazer isso
// 1 