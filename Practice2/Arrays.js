let a = [ 1,2,3,4]
let b = [ "nice","m",true ]
let c = [ 1,b,3 ]
console.log(a[0])
console.log(b[2])
console.log(c[1])
console.log(`type of b is ${typeof(b)}`)
console.log(`frist item : ${b[0]}`)
console.log(`last item : ${b[b.length-1]}`)
for(let i =0;i<b.length;i++){
    console.log(`index:${i} is ${b[i]}`)
}
console.log("length of b",b.length)
b.push("King")
console.log(b)
b[b.length]="Queen"
console.log(b)
b[b.length+1]="Joker"
console.log(b)
console.log("length of b",b.length)
delete b[1]
console.log(b)
console.log("length of b",b.length)

b =[true]
console.log(b)

// let arr1 = ["good","nice"]
// let arr2 = ["Not",arr1,"bad"]
// console.log(arr2)
//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors)
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts)
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
console.log(groups)
console.log(colors[1])
console.log(contacts[0].email[1])
for (i of groups) {
    console.log(i[i.length-1])
}

let s1 = ['hello']
let s2 = [...s1,'World']
console.log(s2)
let greeting = 'hello chicken'
let greetingCh=[...greeting]
console.log(greetingCh)
let cloneGreeting = ['check',...greetingCh,'done']
console.log(cloneGreeting)

const arr1 = new Array()
console.log(arr1);
console.log(arr1.length);

const arr2= new Array(10)
console.log(arr2);
console.log(arr2.length);

const arr3= new Array(1,5,7,'hello')
console.log(arr3);
console.log(arr3.length);
const arr4 =Array.of(5)
console.log(arr4);
console.log(arr4.length);
const arr5 =Array.from(arr3)
console.log(arr5);
const str = 'hello'
const arr6 = Array.from(str)
console.log(arr6);
