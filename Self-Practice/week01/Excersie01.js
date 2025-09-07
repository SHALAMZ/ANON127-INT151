let user = {
    id : 1,
    name : "Anon",
    email : "anon.yany@kmutt.ac.th"
};
for (let key in user){
    console.log(`${key}:${user[key]}`)
};
let book = {
    isbn : 10,
    isAvalable : true,
    name : "Marvels"
}
console.log(book)
console.log(`Name Book : ${book.name}`)
console.log(`Is Avalable : ${book.isAvailable}`)
book.Price = 120
console.log(book)
book.Price = 200 
console.log(book.Price)
console.log(book["Price"])
///สร้าง Objectใช้ { key: value } เช่น user, book
// ฝฝวนลูปอ่านค่าใน Objectใช้ for...in เพื่อ loop key → user.id, user.name, user.email
//เข้าถึง property แบบ dot notation → book.name
//แบบ bracket notation → book["Price"]
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

