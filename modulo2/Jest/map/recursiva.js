// função que vai somar todos os itens de um array
const sum = arr => {
    if(arr.length ===0 )
    return 0
    const [head, ...tail] = arr
    return head + sum(tail)
}
console.log(sum([1, 2, 3]))


// vai fazer isso
// 1 + sum([2, 3])
// 1 + 2 + sum([3])
// 1 + 2 + 3 + sum([])
// 1 + 2 + 3 + 0
// 6