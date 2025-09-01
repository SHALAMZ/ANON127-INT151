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


ค

