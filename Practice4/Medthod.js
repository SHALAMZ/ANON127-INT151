//Anonymous function
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
//function wordlength (words){}
// const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// const primeNums = nums.filter(function (num) {
//     for (let i = 2; num > i; i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return num > 1
// })
//Named function
// function isMorethanFive(value) { return value > 5 }
// const filterNums = [12, 5, 8, 130, 44].filter(isMorethanFive)
const words = ['mango','apple','mangosteen','orange','mangoes']
// const shortWords = words.filter((word) => word.length <=6)
//annonymus function decare
const shortWords = words.filter( function(word){
    return word.length <= 6
})
console.log(words)
console.log(shortWords)

const sordtWords = words.sort() //orginal ถูกเปลี่ยนด้วย
console.log(words)
console.log(sordtWords)

function wordLength(word) {
  return word.length <= 6
}
const ShortWords = words.filter(wordLength)
console.log(words)
console.log(ShortWords)

const upperWords = words.map(word => word.toUpperCase())
console.log(upperWords);  

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]
const IdStudent = students.map((students)=> students.id)
console.log(IdStudent)

const studentId = students.filter(student => student.id % 2 == 0).map(student => student.id)
console.log(studentId);
console.log(students.filter(Element => Element.id % 2 == 0).map(Element => Element.id))

const array6 = [5, 12, 8, 130, 44]
const found = array6.find(element => element > 10)
console.log(found) //first element
const array7 = [5, 12, 8, 130, 44]
console.log(array7.findIndex(element => element > 13))

const FindMango = words.filter(word => word.toLowerCase().includes("mango"))
console.log(FindMango)

// 110 อยากได้jellycat
const findpoanramai = words.find(word => word.toLowerCase() === "apple");
if (findpoanramai) {
  console.log(" have apple");
} else {
  console.log("don't have apple");
}

const product = [1, 'RED', 102]
const productDetail = product.reduce((detail, prop) => {
return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
},'')
console.log(productDetail)

// const cart = [
//   { productId: 1001, price: 500, quantity: 2 },
//   { productId: 1002, price: 10, quantity: 3 },
//   { productId: 1003, price: 5, quantity: 10 },
// ]
// const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// const result = { total };
// console.log(result);

const cart = [
  { productId: 1001, price: 500, quantity: 2 },
  { productId: 1002, price: 10, quantity: 3 },
  { productId: 1003, price: 5, quantity: 10 },
]
// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
cart.push({ productId: 5555, price: 1, quantity: 4 })
console.log(cart)
console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
console.log(cart.length) //3

const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
words1.splice(2,1,"banana")
console.log(words1)

words1.splice(3,2)
console.log(words1)

words1.splice(2,0,"melon","Cherry")
console.log(words1)
const words2 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
console.log(words2.slice(2))
console.log(words2.slice(1,4))
console.log(words2.fill(null))