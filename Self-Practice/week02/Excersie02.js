// 1. สร้าง array
let fruits = ["apple", "banana", "mango"];
console.log(fruits);

// 2. เพิ่มค่า (push) ที่ท้าย
fruits.push("orange");
console.log(fruits);

// 3. เอาค่าสุดท้ายออก (pop)
let last = fruits.pop();
console.log(fruits, "เอาออก:", last);

// 4. เพิ่มค่า (unshift) ที่หน้า
fruits.unshift("grape");
console.log(fruits);

// 5. เอาค่าแรกออก (shift)
let first = fruits.shift();
console.log(fruits, "เอาออก:", first);

// 6. เรียงตัวอักษร
fruits.sort();
console.log("เรียง:", fruits);

// 7. Reverse
fruits.reverse();
console.log("กลับด้าน:", fruits);

let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(n => console.log("forEach:", n));

// map
let squared = numbers.map(n => n * n);
console.log("map:", squared);

// filter
let even = numbers.filter(n => n % 2 === 0);
console.log("filter:", even);

// reduce
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("reduce:", sum);

// สรุปเรื่อง Array 
// let arr = [1, 2, 3]; → การสร้าง array
// push() → เพิ่มค่าที่ท้าย
// pop() → ลบค่าที่ท้าย
// unshift() → เพิ่มค่าที่หน้า
// shift() → ลบค่าที่หน้า
// sort() → เรียงข้อมูล (ค่าเริ่มต้นคือเรียงตามตัวอักษร)
// reverse() → กลับลำดับ array
// forEach() → วนทุกตัว (ใช้แทน for-loop ได้)
// map() → สร้าง array ใหม่จากการแปลงค่า
// filter() → เลือกเฉพาะค่าที่ตรงเงื่อนไข
// reduce() → สรุปผลเป็นค่าเดียว เช่น หาผลรวม