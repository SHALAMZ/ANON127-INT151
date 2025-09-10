let nums=[15,20,35]
let students = [
    {id:1 ,name :"anon"},
    {id:2, name: "fias"}
]
console.log(nums)
console.log(students[0].id)
console.log(students[1])

let color = [
    ['greee','red'],
    ['yellow','black']
]
console.log(color[0][1])

let a = [1,2,3]
let b = [0,...a,4]
console.log(b)
let c =[5,10,15]
console.log(`c:${c}`)
let d = [...c]
console.log(d)
d[0] = 10
console.log(d)
// let e = new Array()
// console.log(e);
let e = new Array(10)
console.log(e);
let g = new Array(3,2,1,'testing')
console.log(g);
let j = Array.of(1,2,3)
let k = Array.of(j)
console.log(j);
console.log(k);

let a1 = ['hello']
// console.log(a1[0])
let value = a1[0]
console.log[value]
a1[1] = 3.5
console.log(a1);
let i = 2 
a1[i] = 3
console.log(a1);
a1[i+1] = "world"
console.log(a1);
a1[a1[i]] = a1[0]
console.log(a1);
