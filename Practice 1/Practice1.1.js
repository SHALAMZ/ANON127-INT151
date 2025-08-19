let student = { name : 'anon' , age : 19 ,getname:function(){return this.name} }
// let student = { name : 'anon' , age : 19 ,getname(){return this.name} }
console.log(student)
console.log(student.getname())
let obj = {animal1: 'cripto' ,animal2:[{bird:'macrow'},{dog:'labador'}], 
        isAnimal:true,superdog(){return this.animal1}}
console.log(obj)
console.log(obj.superdog())
console.log(obj.animal2)

const book={isbn:12345678,isbn:87654321, title:'Introduction to JS',authors:[{firstname:'John'}, {lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], versions:[1.0, 2.0,3.0], isAvailable:true, getISBN(){return this.isbn}}
console.log(book)
// console.log(book.getISBN())
// console.log(book.authors[0].firstname)
// console.log(book.authors)\
book.publishDate = new Date(2025,1,1)
delete(book.isbn) //delete book.isbn
console.log(book)
console.log(book["publishDate"]) //ก้ามปู+ดับเบิ้ลโคด
console.log(book.publishDate)
for (const key in book){
    //console.log(book.key)not allow
    console.log(book[key])
}
// constructor func
function Book(isbn,title){
    this.isbn=isbn
    this.title=title
}
const b1 = new Book(123,'JS')
const b2 = new Book(888,'CSS')
console.log(b1)
console.log(b2)

//class
class Book{
    constructor(isbn,title){
        this.isbn=isbn
        this.title=title
    }
    getISBN(){
        return this.isbn
    }
    setTitle(title){
        this.title =title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, tilte : ${this.title}`
    }
}
const myBook = new Book (123,'JS Beginner')
// console.log(myBook.getBookInfo())
// console.log(myBook.getISBN())
// console.log(myBook.setTitle('JS for Beginner'))
// console.log(myBook.getBookInfo())
//obj.create
// const journal = Object.create(myBook)
// journal.isbn=5678
// console.log(journal)
// console.log(journal.isbn)
// console.log(journal.title)
// const b1 = {id:1, title : "JS"}
// function doSomething(x){
//     x={id:1,title:"JS"}
//     x.id=555
// }
// console.log(b1)
// console.log(doSomething(b1))
// console.log(b1)
// const b1 ={id:1,title:"JS"}
// const b2 ={id:1,title:"JS"}
// console.log(b1==b2)
// console.log(b1===b2)
// console.log(Object.is(b1,b2))
// b3 = b1
// console.log(b1===b3)
// function isBookEqual(b1,b2){
//     return b1.id===b2.id?true:false
// }
// console.log(isBookEqual(b1,b2))
const keys=Object.keys(b1)
const values=Object.values(b1)
console.log(keys)
console.log(values)