export const some = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i], i, arr)) {
        return true
      }
    }
    return false
  }
  
// o some me retornara TRUE  se ao meno 1 dos itens do array atender a função
// numa comparação com o excel é como se fosse o OR...  
// [1, 2, 3].some((item) => item > 2)    como um dos item do array é maior que 2,
// o retorno será true