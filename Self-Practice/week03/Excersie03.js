// สร้าง array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); 

console.log(fruits[0]); 
console.log(fruits[2]); 
// เพิ่มสมาชิก
fruits.push("mango");
console.log(fruits);
// ลบสมาชิก
fruits.pop();
console.log(fruits); 
// ความยาว
console.log(fruits.length);

let numbers = [1, 2, 3, 4, 5];
// map:สร้างarrayหม่โดยเปลี่ยนค่าทุกตัว
let squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]
// filter:เฉพาะเลขคู่
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
// reduce:รวมค่าทุกตัว
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
// find:หาค่าตัวแรกที่ตรงเงื่อนไข
let firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2

let students = [
  { id: 1, name: "Alice", score: 85 },
  { id: 2, name: "Bob", score: 92 },
  { id: 3, name: "Charlie", score: 70 }
];

// sort: เรียงคะแนนจากมากไปน้อย
students.sort((a, b) => b.score - a.score);
console.log(students);

// some:มีใครสอบได้มากกว่า90ไหม?
let hasHighScore = students.some(s => s.score > 90);
console.log(hasHighScore); // true

// every:ทุกคนสอบผ่านหรือไม่ (>= 50)
let allPassed = students.every(s => s.score >= 50);
console.log(allPassed); // true

// flatMap:สร้างlistของชื่อ + คะแนน
let summary = students.flatMap(s => [`${s.name}: ${s.score}`]);
console.log(summary); 