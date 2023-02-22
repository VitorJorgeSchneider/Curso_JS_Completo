const arr = new Array()
const arr2 = new Array(true, "D", 28, new Array(2, 4, 10))
console.log(arr2[3][2])
console.log(arr2[3][arr2[3].length -1])
arr[0] = "Da"
arr[1] = 40
console.log(arr)

const arr3 = ["D", 40, [3, 6, 9], true]
console.log(arr3)

arr3[4] = "nvVlr"
console.log(arr3)

arr3[arr3.length] = "nvVlr2"
console.log(arr3)

arr3.push("nvVlr3")
console.log(arr3)

arr3.push("a", "b", "c")
console.log(arr3)

let n = 7

console.log(arr3[n])